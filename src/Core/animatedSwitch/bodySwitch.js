import React ,{Component} from 'react';
import {  AnimatedSwitch } from 'react-router-transition';
import {makebodyWithRoutes} from '../codes/action'
  import {animateSwitchWraper} from '../css/weezif'
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
export default class BodyBounceSwitch extends Component{
    constructor(props){
        super()
        this.routes=props.routes
    }
    render(){
        return(
            <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            
          style={animateSwitchWraper}
        >    
          {makebodyWithRoutes(this.routes)}      
        </AnimatedSwitch>
        )
    }
}