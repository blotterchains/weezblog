import React ,{useState}from 'react';
import {BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles"
import Sidebar from "./Core/components/sidebar";
import TopNav from "./Core/components/topNav"
import FindscreenRes from "./Core/components/findScreenRes"
import {  AnimatedSwitch } from 'react-router-transition';
import {MakebodyWithRoutes} from './Core/codes/action'
import Homebd from "./Core/screens/homeBd";
import About from "./Core/screens/about";
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}
const bounceTransition = {
  atEnter: {
    opacity: -2,
  },
  atLeave: {
    opacity: 1,
  },
  atActive: {
    opacity: 1,
  },
};
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
  
  const [ screenReso,setReso ]=useState((window.innerWidth>480 && window.innerHeight>320 ? 
            
    true:
    false      
))
const routes=[
  {
    path:"/",
    render:<Homebd screenReso={screenReso} setReso={setReso}/>
  },
  {
    path:"/Home",
    render: <Homebd screenReso={screenReso} setReso={setReso}/>   
    
  },{
    path:"/About",
    render:<About screenReso={screenReso} setReso={setReso}/>
  },{
    path:"/Blog",
    render:<Homebd screenReso={screenReso} setReso={setReso}/>
  },]
  return (
    
    <div>
      <FindscreenRes setReso={setReso}/>
      <ThemeProvider theme={textInpute}>
        <div style={{overflowY:"auto"}}>
          <center>
            <TopNav/>
      </center>
        </div>
      <div>
      <Sidebar screenReso={screenReso} setReso={setReso}/>

      <MakebodyWithRoutes route={routes} />
        
        
        
      </div>


      
      </ThemeProvider>
      

    </div>
  );
}
export default App;
