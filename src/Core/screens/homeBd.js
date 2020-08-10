import React, { Component, } from 'react';
import { Box, Grid } from "@material-ui/core";
import Sidebar from "../components/sidebar";
import { whiteSection, greenSection , blogbdDesk, blogbdDeskAnim, blogbdscrollDesk, blogbdMob, blogbdscrollMob, sidebar } from "../css/blog"
import { useStateValue } from '../components/stateManage';
import {css } from 'aphrodite';
import {NumContext} from '../components/stateManage';
import Carousel from 'react-material-ui-carousel';
import '../css/blog.css'
const image=[
    {
        h1:'اولین اسلاید',
        imglnk:'https://lh3.googleusercontent.com/proxy/-xLxyeDhZVLD6Tl161laQiHH80Ikevlo4McV4NUA8f2hRdq1C0gIJhjpbYECb6LfCdWYvFRQlk2Dm5Bd-ZdsEfQUpmVXE8_9-NOdR-Wng2I4IU2uXVwSWNNg02-hHSbN1PyH90jq13WU_YNkyb9hcCB7N1R8iHmLQS9xYgW9CUJSihVB4fuEAMOxeW-Hk2rLQZPCqo9pzh2tv0duYB-ZMCvH4YM5Los'
    },
    {
        h1:"دومین اسلاید",
        imglnk:"https://i.redd.it/djnlea7fpf301.jpg"
    }]
const slideShowRender=(imglnk,h1)=>{
    return(
        <Box className={css(blogbdDeskAnim.bounce)} boxShadow={7} style={whiteSection}>
                                    <img style={{
                                        width:'100%',
                                        height:'50vh',
                                        borderRadius:10,
                                        }} src={imglnk}
                                        />

                                            <div style={{
                                            position:'absolute',
                                            bottom:'5vh',
                                            left:'3vw',
                                            width:'90vw',
                                            borderRadius:50,
                                            "background":"linear-gradient(to bottom,  rgba(214,214,214,0.1) 0%,rgba(0,0,0,0.5) 78%,rgba(0,0,0,0.6) 90%)",
                                            "filter":"progid:DXImageTransform.Microsoft.gradient( startColorstr='#82d6d6d6', endColorstr='#c4000000',GradientType=0 )"
                                            }}>
                                                <center>
                                                    <h1 style={{color:'white'}}>{h1}</h1>
                                                </center>
                                            </div>

                                </Box>
    )
}
export default function Homebd(props) {
    const [{ screenReso }, dispatch] = useStateValue();
   return (
       
        
                <div style={screenReso ? blogbdscrollDesk : blogbdscrollMob}>
                    
                    <div >

                        <Box boxShadow={3} style={screenReso ? blogbdDesk : blogbdMob}>
                            <Carousel navButtonsAlwaysVisible={true}>
                                {image.map((data)=>slideShowRender(data.imglnk,data.h1))}
                            </Carousel>
                            <img class='btn-social' src={image[0].imglnk}/>
                            
                        </Box>
                    </div>
                    </div>
    )
}
