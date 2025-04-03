import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactMapGL, { Source, Layer, FillLayer, LineLayer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox CSS
import StatsSection from './StatSection'
import { StatProps } from './Stat';
import { StopsData, StopsDataProps } from "../Global/StopsData";
import { NationalParksCoordinateMap } from "../Global/NationalParkData";
import RouteJson from "../Global/RouteData.json";
import { alpha, useTheme } from "@mui/material";
import { AnimatePresence} from 'framer-motion';
import MapPlaceMarker from './Map/MapPlaceMarker';
import NationalParkMarker from './Map/NationalParkMarker';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGFpZ2Vwb24iLCJhIjoiY2tzdnJiMTRzMXNjODJubGV2dDBhaDQzNCJ9.ugD_4F0bN-AvV3sMi_hDUg'; // Replace with your Mapbox toke
/**
 * Renders a Map of the United States with a states component on top
 * Iterates through a routeData Json and maps the route along the way
 * 
 */
const MapsAndStatsSection: React.FC = () => {
  // need to add a default to New York or we'll throw an error in the layer rendering
  // a workaround to that is to prevent the rendering when highlightState is empty but this seems to work
  // just fine
  const mapRef = useRef<typeof ReactMapGL>(null);
  const [allData, setAllData] = useState(null);

  const [currentRoute, setCurrentRoute] = useState<GeoJSON.FeatureCollection | null>(
    null
  ); 
  const [currentStops, setCurrentStops] = useState<StopsDataProps[]>([])
  const [currentTotalDays, setCurrentTotalDays] = useState(0);
  const [currentStates, setCurrentStates] = useState<string[]>(["New York"]);
  const [currentTotalMiles, setCurrentTotalMiles] = useState(0)
  const [currentNationalParks, setCurrentNationalParks] = useState<StopsDataProps[]>([])
  const allStops:StopsDataProps[] = StopsData;
  const theme = useTheme();

  // load the state geojson
  useEffect(() => {
    /* global fetch */
  
    fetch(
      'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json'
    )
      .then(resp => resp.json())
      .then(json => setAllData(json))
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line
  }, []);

  /**
   * Using Preloaded route data, find the next route information that stops at a certain coordinate
   * @param coordinates 
   */
  const getRoute = (coordinates: [number, number]) => {
    const directionsList = RouteJson.routes[0].geometry; 
    let splitIndex = -1;
    let splitDirectionList: any;

    // iterate through the coordinates for the directions and find the first closest route
    directionsList.coordinates.map((dirCoord, index) => {
      const dirCoordToTuple:[number, number] = [dirCoord[0], dirCoord[1]]
      const areClose = areCoordinatesClose(dirCoordToTuple, coordinates);

      // if the locations are close we want to split the route
      if(areClose) {
        splitIndex = index;
        return;
      }
      
    });

    // split the directions at that index
    if (splitIndex !== -1) {
      splitDirectionList = { 
          "coordinates": directionsList.coordinates.slice(0, splitIndex),
          "type": "LineString"
        };
    } else {
      // otherwise keep the current list
      splitDirectionList = directionsList;
    }

    setCurrentRoute(splitDirectionList);
  };

  /** 
   * Takes two coordinates and matches them within general vicinity of one another
   */
  const areCoordinatesClose = (coord1: [number, number], coord2: [number, number]) => {
    const [lat1, lon1] = coord1;
    const [lat2, lon2] = coord2;

    const latDiff = Math.abs(lat1 - lat2);
    const lonDiff = Math.abs(lon1 - lon2);

    // Check if the differences are less than 0.001 (within the thousandth decimal)
    return latDiff < 0.001 && lonDiff < 0.001;
  }

  const splitAndTrimStrings = (str: string, separator: string = ' '): string[] => {
    return str
      .split(separator)
      .map((part) => part.trim())
      .filter((part) => part !== '');
  }

  // set the interval to set the states
  useEffect(() => {
    let count = 0;
    let allCoordinatesList = "";

    const intervalId = setInterval(() => {
      const currentStop = allStops[count];
      /***
       * Update States
       */
      setCurrentStates(prevStates => {
        const currentStopStates = currentStop['States List']?.split(", ").filter(item => item.trim() !== ""); 
        // Do not put a state into the array if it already exists or is empty
        if (currentStopStates === null || 
          currentStopStates === undefined ||
          currentStopStates.length <= 0) {
          return prevStates; // do nothing
        }
        
        // join the arrays and remove any duplicates
        return [...new Set([...prevStates, ...currentStopStates])];
      });

      /***
       * Update Days
       */
      setCurrentTotalDays(prevDays => {
        const currentDays = currentStop['Days'];
        return prevDays + currentDays;
      })

       /***
       * Update Miles Travelled
       */
      setCurrentTotalMiles(prevMiles => {
        const miles = currentStop['Miles'];
        return prevMiles + miles;
      })

      // check to see if there is a national park in this list
      const nationalParkList = currentStop['National Parks List'];
      let nationalParkPlaces:StopsDataProps[] = [];
      if (nationalParkList.length > 0) {
        // split the list by the comma
        const nationalParkArray:string[] = splitAndTrimStrings(nationalParkList, ",");
        nationalParkPlaces = nationalParkArray.map((park:string) => {
          // get the coordinates from the map
          const parkCoords = NationalParksCoordinateMap[park];
          const parkData:StopsDataProps = {
            "Name": park,
            "Coordinates": parkCoords,
            'Arrival Date': '',
            'Departure Date': '',
            'States List': '',
            'National Parks List': '',
            Miles: 0,
            Days: 0
          }; 
          return parkData;
        })

      }

      /***
       * Update National Parks
       */
      setCurrentNationalParks(prevParks => {
        if (nationalParkPlaces.length > 0) {
          return [...prevParks, ...nationalParkPlaces];
        }

        return prevParks;
        
      })
      
      /***
       * Setting Stops TODO
       */
      setCurrentStops(prevStops => {
        return [...prevStops, ...[currentStop]];
      });

      /***
       * Update Route
       */
      getRoute(currentStop['Coordinates']);

      allCoordinatesList = allCoordinatesList + currentStop['Coordinates'] + ';';

      count++;
      // we've processed all stops, end the interval
      if (count >= allStops.length) {
        clearInterval(intervalId);
      }
      // TODO end the interval when we have gone through every route
    }, 1000); // Update every 5 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  // Set States fill layer styling 
  const fillLayerStyle: FillLayer = {
    id: 'state-fills',
    type: 'fill',
    source: 'us-states',
    paint: {
      'fill-color': [
        'match',
        ['get', 'name'],
        [...currentStates],
        alpha(theme.palette.secondary.main, 0.4), // Highlight color
        'rgba(0,0,0,0)', // Intentionally transparent
      ]
    },
  };

  // draw route
  const routeLayerStyle: LineLayer = {
    id: 'route',
    type: 'line',
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': theme.palette.grey[500],
      'line-width': 3,
    }
  };

  const data = useMemo(() => {
    return allData;
  }, [allData]);

  const stats:StatProps[] = [
    {
        title: "Days on the Road",
        value: currentTotalDays
    },
    {
        title: "States Visited",
        value: currentStates.length
    },
    {
        title: "Miles Travelled",
        value: currentTotalMiles
    },
    {
        title: "Stops",
        value: currentStops.length
    },
    {
        title: "National Parks",
        value: currentNationalParks.length
    }
    
]
  return (
    <div>
      <StatsSection stats={stats}/>
      <ReactMapGL
        ref={mapRef}
        initialViewState={{
          latitude: 37.8,
          longitude: -96,
          zoom: 3.5,
        }}
        style={{ width: '100%', height: '500px' }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={MAPBOX_TOKEN}
        scrollZoom={false}
      >
        <Source id="us-states" type="geojson" data={data}>
            <Layer {...fillLayerStyle} />
        </Source>
        <Source 
          id="driving-route" 
          type="geojson" 
          data={currentRoute}>
            <Layer {...routeLayerStyle} />
        </Source>
        <AnimatePresence>
        {currentStops.map((stop, index) => (
          <MapPlaceMarker  key={`stop-${index}`} name={stop.Name} coordinates={stop.Coordinates} theme={theme} />
        ))}
        </AnimatePresence>
        {currentNationalParks.map((stop, index) => (
          <NationalParkMarker key={index} stop={stop} theme={theme} />
        ))}
      </ReactMapGL>
    </div>
  );
};




export default MapsAndStatsSection;