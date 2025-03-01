import { useEffect, useRef, useState } from "react"
import canvasImages from "./canvasimages"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Canvas({details}) {
    
    let { startIndex, numImages, duration, size, top, left, zIndex } = details;
    let [index, setIndex] = useState({value: startIndex})
    let canvasRef = useRef(null);

    useGSAP(()=> {
        gsap.to(index, {
            value: startIndex + numImages -1,
            duration: 2,
            repeat: -1,
            ease: "linear",
            onUpdate: ()=> {
                setIndex({value: Math.round(index.value)});
            },
        })
    })

    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = canvasImages[index.value];
        img.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            canvas.style.width = canvas.offsetWidth + "px";
            canvas.style.height = canvas.offsetHeight + "px";
    
            ctx.scale(scale, scale);
            ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        };
    }, [index]);
    
    return (
        <canvas
        data-scroll
        data-scroll-speed={Math.random().toFixed(1)}
        ref={canvasRef} 
        id="canvas" 
        className="absolute" 
        style={{
            width: `${size * 1.3}px`,
            height: `${size * 1.3}px`,
            top: `${top}%`,
            left: `${left}%`,
            zIndex: `${zIndex}`,
            }}></canvas>
    )
}

export default Canvas