import React ,{useState,useEffect} from 'react';
import {Box,Button} from "@material-ui/core"
import {sidebar,whiteSection} from "../css/blog" 
export default function Sidebar (props){
        return(
        <div style={props.screenReso ? {float:"left",height:"100%"}:{display:"none"}}>
        <Box boxShadow={7} style={whiteSection}>
        <Button  variant="contained" color="primary">
              sections
          </Button>
          

          </Box>
          
      </div>
        )
    
}

