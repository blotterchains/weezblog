import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import {BottomNavigation,BottomNavigationAction} from "@material-ui/core"
export default function TopNav(){
    const [Bottomnav, bottset] =useState(0);
    const history=useHistory();
        return(
            <BottomNavigation
        onChange={(e, value) => bottset(value)}
        showLabels
        value={Bottomnav}
        style={{borderBottom:"2px solid rgba(0,0,0,.5)",marginBottom:"2px"}}
        >
          <BottomNavigationAction label="home" onClick={(e)=>history.push(e.target.innerText)}/>
        <BottomNavigationAction label="blogs" onClick={(e)=>history.push(e.target.innerText)}/>
        <BottomNavigationAction label="about" onClick={(e)=>history.push(e.target.innerText)}/>
        <BottomNavigationAction label="home" onClick={(e)=>history.push(e.target.innerText)}/>
        <BottomNavigationAction label="blogs" onClick={(e)=>history.push(e.target.innerText)}/>
        <BottomNavigationAction label="about" onClick={(e)=>history.push(e.target.innerText)}/>
        
      </BottomNavigation>
        );
    
}