import React, { useState, createContext, useContext } from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import TopNav from "./Core/components/topNav"
import { StateProvider, NumContext } from './Core/components/stateManage';
import FindscreenRes from "./Core/components/findScreenRes"
import { MakebodyWithRoutes } from './Core/codes/action'
import Homebd from "./Core/screens/homeBd";
import About from "./Core/screens/about";
import { Grid } from '@material-ui/core';
import Sidebar from './Core/components/sidebar'
const blogTheme = createMuiTheme({
  direction: 'rtl',
  spacing: 4,
  typography: {
    fontSize: 20,
    fontFamily: ['Harmattan', 'sans-serif'],
  },

  palette: {

    secondary: {
      main: 'rgba(23, 70, 83,0.8)',
    },
    primary: {

      main: 'rgb(255, 102, 102)',
    }

  },
});
const initialState = {
  screenReso: (window.innerWidth > 480 && window.innerHeight > 320 ?
    true :
    false
  )
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'mob':
      console.log('mob')
      return { screenReso: 'mob'};
      
    default:
      return state;
  }
};
function App() {
  const [screenReso, setReso] = useState();
  const [ZZ,setZZ]=useState(0);
  const routes = [
    {
      path: "/",
      render: <Homebd/>
    },
    {
      path: "/Home",
      render: <Homebd screenReso={screenReso} setReso={setReso} />

    }, {
      path: "/About",
      render: <About screenReso={screenReso} setReso={setReso} />
    }, {
      path: "/Blog",
      render: <Homebd screenReso={screenReso} setReso={setReso} />
    },]
  return (

    <div>
      <ThemeProvider theme={blogTheme}>
        <div style={{ overflowY: "auto" }}>
          <center>
            <TopNav />
          </center>
        </div>
        <div>
          <StateProvider reducer={reducer} initialState={initialState}>
            <FindscreenRes/>
            <Grid spacing={3} container>
              <Grid item>
                <Sidebar/>
              </Grid>
              <Grid item>
                <NumContext.Provider value={[ZZ,setZZ]}>
                    <MakebodyWithRoutes route={routes} />
                </NumContext.Provider>
              </Grid>
              
            </Grid>
          </StateProvider>
        </div>
      </ThemeProvider>
    </div>
  );
}
export default App;
