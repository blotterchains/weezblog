import React, { Component, useReducer ,useState,useContext} from 'react';
import { Box, Avatar, Grid, Button, Input, Hidden } from "@material-ui/core"
import { whiteSection, blogbdDesk, blogbdscrollDesk, blogbdMob, blogbdscrollMob, blogbdDeskAnim } from "../css/blog"
import { useStateValue } from '../components/stateManage';
import {css } from 'aphrodite';
import {Favorite, Share, Chat} from '@material-ui/icons';
import {NumContext} from '../components/stateManage'
export default function About(props) {
    const [screenReso , dispatch] = useStateValue();
    const [comment,commentDis]=useState(true);
    const [likes,likeDis]=useState(false);

    console.log(comment)
    return (
        <div style={screenReso ? blogbdscrollDesk : blogbdscrollMob}>
        <div >
            
            <Box boxShadow={3} style={screenReso ? blogbdDesk : blogbdMob}>
            <NumContext.Consumer >
{(theme)=><Button onClick={()=>theme[1](theme[0]+1)}>{theme[0]}</Button>}
            </NumContext.Consumer>
                <Box className={css(blogbdDeskAnim.bounce)} boxShadow={7} style={whiteSection}>
                    <Grid spacing={3} container>
                        <Grid spacing={2} container >
                            <Grid item>
                                <Avatar src="https://api.adorable.io/avatars/243/rezagina@.com.png"/>    

                            </Grid>
                            <Grid justify="flex-end" item>
                                <p>simon driver</p>
                            </Grid>
                        </Grid>
                        <Grid spacing={3} container>
                                <Grid xs={8} item>
                                    <p>
                                    Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.
                                    </p>

                                </Grid>
                                <Grid alignItems='flex-start' item>
                                    <Box boxShadow={3} color='red'>
                                        <Grid container>
                                            <Grid onClick={()=>likeDis(!likes)} item>
                                                <Button style={{width:'3vw',flexDirection:'row'}}>
                                                        <Favorite color={likes ? "primary":"inherit"}/>                                            
                                                </Button>
                                            </Grid>
                                            <Grid item>
                                                <Button style={{width:'3vw',flexDirection:'row'}}>
                                                        <Share/>                                            
                                                </Button>
                                            </Grid>
                                            <Grid onClick={()=>commentDis(!comment)} item>
                                                <Button  style={{width:'3vw',flexDirection:'row'}}>
                                                        <Chat color={comment ? "inherit":"primary"}/>                                            
                                                </Button>
                                            </Grid>
                                            
                                        </Grid>
                                        
                                    </Box>
                                    
                                </Grid>
                                <Hidden lgDown={comment}>
                                                <Input 
                                                style={{width:'100%'}} 
                                                placeholder="Write your comment" />
                                            </Hidden>
                        </Grid>
                    </Grid>
                </Box>
                    <br />
                   
                </Box>
                </div>
        </div>

    )
}
