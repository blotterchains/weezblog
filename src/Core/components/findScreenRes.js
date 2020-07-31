import { useEffect } from "react";
import { useStateValue } from './stateManage';
export default function FindscreenRes() {
    const [{ screenReso }, dispatch] = useStateValue();
    useEffect(
        () => {
            const handleResize = () => {
                dispatch({type:(window.innerWidth > 480 ?
                    true : 'mob'
                )})
            }
            window.addEventListener('resize', handleResize)
        }
    )
    return ""

}