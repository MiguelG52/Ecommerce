import { useEffect, useState } from "react";

export const useScreenWidth = (limit)=>{
    const [width, setWidth] = useState(0);
    const [larger, setLarger] = useState(width > limit ? true:false);
    

    useEffect(()=>{
        
        const onResize = () =>{
            const innerW = window.innerWidth;
            setWidth(innerW);
            width > limit ? setLarger(true):setLarger(false);
        }
        return () => {
            window.addEventListener("resize", onResize);
            window.addEventListener('onload', onResize);
        };

    },[width,larger])

    return [larger];
}