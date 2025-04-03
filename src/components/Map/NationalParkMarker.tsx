import {  Theme } from "@mui/material";
import { StopsDataProps } from "../../Global/StopsData";
import  {  Marker} from 'react-map-gl';
import { motion } from "framer-motion";
import ParkIcon from '@mui/icons-material/Park';

type NationalParkMarkerProps = {
    stop: StopsDataProps,
    theme: Theme;
}

const NationalParkMarker = ({stop, theme}:NationalParkMarkerProps) => {
    return <Marker
    longitude={stop.Coordinates[0]}
    latitude={stop.Coordinates[1]}
  >
    <motion.div
      initial={{ opacity: 0 }} // Start with 0 opacity
      animate={{ opacity: 1 }} // Animate to 1 opacity
      transition={{ duration: 0.5 }} // Adjust duration as needed
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row-reverse'
      }}
    >
      <span role="img" aria-label="marker" style={{ fontSize: '1em' }}>
        <ParkIcon fontSize="small" style={{color: theme.palette.grey[700]}} />
      </span>
  
     
    </motion.div>
  </Marker>;
  }

  export default NationalParkMarker;