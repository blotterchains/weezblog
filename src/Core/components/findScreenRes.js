import {useEffect} from "react";
export default function FindscreenRes(setReso){
    useEffect(
        ()=>{
            const handleResize=()=> {
                console.log("resize")
                setReso.setReso((window.innerWidth>480 ? 
            
                    true:false
                            
            ))}
              
                    
            window.addEventListener('resize', handleResize)
        }
    )
        return ""
    
}