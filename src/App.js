import React ,{useState}from 'react';
import {BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles"
import Homebd from "./Core/screens/homeBd";
import Sidebar from "./Core/components/sidebar";
import FindscreenRes from "./Core/components/findScreenRes"
const textInpute =createMuiTheme({
  direction:'rtl',
  spacing:4,
  typography:{fontSize:20,   
  fontFamily: ['Harmattan', 'sans-serif'],
  },
  
  palette: {
    
      secondary: {
          main: 'rgba(23, 70, 83,0.8)',
        },
        primary:{
          
            main:'rgb(255, 102, 102)',
        }
    
  },
});
function App() {
  const [Bottomnav, bottset] =useState(0);
  const [ screenReso,setReso ]=useState((window.innerWidth>480 && window.innerHeight>320 ? 
            
    true:
    false      
))
  return (
    
    <div>
      <FindscreenRes setReso={setReso}/>
      <ThemeProvider theme={textInpute}>
        <div style={{overflow:"auto"}}>
          <center>
        <BottomNavigation
        onChange={(e, value) => bottset(value)}
        showLabels
        value={Bottomnav}
        style={{borderBottom:"2px solid rgba(0,0,0,.5)",marginBottom:"2px"}}
        >
          <BottomNavigationAction label="home"/>
        <BottomNavigationAction label="blogs"/>
        <BottomNavigationAction label="about"/>
        <BottomNavigationAction label="home"/>
        <BottomNavigationAction label="blogs"/>
        <BottomNavigationAction label="about"/>
        
      </BottomNavigation>
      </center>
        </div>
      
      
      <Sidebar screenReso={screenReso} setReso={setReso}/>
      <Homebd screenReso={screenReso} setReso={setReso}/>

      
      </ThemeProvider>
      

    </div>
  );
}
export default App;
