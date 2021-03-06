import {fadeInDown} from 'react-animations';
import { StyleSheet } from 'aphrodite';
import fadeIn from 'react-animations/lib/fade-in';
import flipInY from 'react-animations/lib/flip-in-y';
import zoomIn from 'react-animations/lib/zoom-in';
export const whiteSection ={
    backgroundColor: "rgba(255, 255, 255,0)",
    color: "black",
    borderRadius: "5px",
    marginLeft: "1em",
    marginRight: "1em",
    height: "100%",
    textAlign: "left",
    position: "relative",
    height:'50vh',
}
export const greenSection = {
    backgroundColor: "rgb(51, 255, 119,.6)",
    color: "black",
    padding: "20px",
    borderRadius: "5px",
    marginLeft: "1em",
    marginRight: "1em",
    textAlign: "left"

}
export const redSection = {
    backgroundColor: "rgba(255, 255, 255,.6)",
    color: "black",
    padding: "20px",
    borderRadius: "5px",
    marginLeft: "1em",
    marginRight: "1em",
    textAlign: "left"

}
export const yellow = {
    backgroundColor: "rgba(255, 255, 255,.6)",
    color: "black",
    padding: "20px",
    borderRadius: "5px",
    marginLeft: "1em",
    marginRight: "1em",
    textAlign: "left"

}
export const sidebar = {
    height: "70vh",
    width: "20vw",
    overflow: "auto",
    borderRadius: "6px",
    margin: "4px",
    color: "#d7d6d5",
    paddingTop: "2vh",
}
export const blogbdscrollDesk = {
    overflowY: "scroll",
    overflowX: "hidden",
    height: "89vh",
    scrollbarColor: "rgba(243, 0, 64) rgba(23, 70, 83)",
    borderLeft: "2px solid rgba(0,0,0,.5)",
}
export const blogbdscrollMob = {
    overflowY: "scroll",
    overflowX: "hidden",
    height: "87vh",
}
export const blogbdDesk = {
    display:'inline',
    top: 0,
    float: "right",
    paddingTop: "2vh",
    paddingBottom: "0vh",
    width: "98vw",
    borderRadius: "6px",
    margin: "0px",
    color: "#d7d6d5",
    backgroundImage: "linear-gradient(rgb(166, 166, 166,0.8), rgb(255, 204, 204))"
}
export const blogbdDeskAnim = StyleSheet.create({
    bounce: {
      animationName: flipInY,
      animationDuration: '1s',
      animationPlayState:'running',
    }
  })
export const blogbdMob = {
    top: 0,
    width: "100%",
    paddingTop: "2vh",
    paddingBottom: "2vh",
    borderRadius: "6px",

    color: "#d7d6d5",
    backgroundImage: "linear-gradient(rgb(166, 166, 166,0.8), rgb(255, 204, 204))"
}

export const blogBody = {


}