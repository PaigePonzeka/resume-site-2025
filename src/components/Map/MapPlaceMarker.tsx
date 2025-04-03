import { alpha, Theme } from "@mui/material";
import { motion } from "framer-motion";
import {  Marker } from 'react-map-gl';
import { useEffect, useState } from "react";
import PlaceIcon from '@mui/icons-material/Place';

type MapPlaceMakerProps = {
    name: string;
    coordinates: [number, number]
    theme: Theme;
  
  }

const MapPlaceMarker = ({name, coordinates,theme}: MapPlaceMakerProps) => {
    const [showLabel, setShowLabel] = useState(true);
    // TODO - show the label on initial load 
  
    // hide label after an amount of time
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLabel(false);
      }, 1000);
  
      // Clean up the timer to avoid potential memory leaks
      return () => clearTimeout(timer);
    }, []); 
  
  
    return <Marker
    longitude={coordinates[0]}
    latitude={coordinates[1]}
    >
     
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} // Animate parent to opacity 0
      transition={{ duration: 0.5 }} // After 2 seconds
      whileHover={{ scale: 1.2 }} // Scale up slightly on hover
      onHoverStart={(e) => {setShowLabel(true)}}
      onHoverEnd={(e) => {setShowLabel(false)}}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer'
        
      }}
    >
      <span role="img" aria-label="marker" style={{ fontSize: '2em' }}>
        <PlaceIcon fontSize="medium" color="primary" />
      </span>
      
        <div
         style={{ 
          marginLeft: '5px', 
          padding: '4px 8px', 
          fontSize: '12px', 
          color: theme.palette.primary.main, 
          backgroundColor: alpha(theme.palette.grey[100], 0.8), 
          opacity: showLabel ? 1 : 0,
          borderRadius: '5px'}}
        >
          {name}
        </div>
        
     
    </motion.div>
  </Marker>
  }

  export default MapPlaceMarker;