import React, { useEffect, useRef, useState } from 'react'

export const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    // const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
    // define the canvas image
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // const [positiony, setPositiony] = useState(0);
    const image3 = new Image()
    image3.src = 'https://e7.pngegg.com/pngimages/21/133/png-clipart-pixel-art-art-game-character-sprite-purple-game.png'
    // Manage the canvas image direction with keybord
    const handleMove=(e:KeyboardEvent)=>{
        console.log(e);
        if(e.keyCode===37){
            setPosition({x:position.x,y:position.y-10})
        }
        if(e.keyCode===83){
            setPosition({x:position.x,y:position.y+10})
        }
        if(e.keyCode===65){
            setPosition({x:position.x-10,y:position.y})
        }
        if(e.keyCode===68){
            setPosition({x:position.x+10,y:position.y})
        }
    }

    const draw = (ctx:CanvasRenderingContext2D, frameCount:number) => {
        // draw image in canvas
        // image.onload = () => {
        //     ctx.drawImage(image, 0, 0)
        // }
        // image2.onload = () => {
        //     ctx.drawImage(image2, 0, 0)
        // }
        image3.onload = () => {
            ctx.drawImage(image3,position.y,position.x,100,100)
        }
        // delete image in positionx-1
        ctx.clearRect(position.x-1,position.y-1,100,100)
      }

// useEffect(() => {
//     const canvas = canvasRef.current
//     if (canvas) {
//         const context = canvas.getContext('2d')
//         //Our first draw
//         if (context) {
//             context.fillStyle = '#3aa0ff'
//             context.fillRect(0, 0, context.canvas.width, context.canvas.height)
//             draw(context, 0)
//         }
//     }
//     window.addEventListener('keydown', handleMove)
// }, [draw])

    useEffect(() => {
        window.addEventListener('keydown', handleMove)
    }, [])
    
    return (
        <div>
            <h1>Canvas</h1>
            {/* <canvas 
            ref={canvasRef} 
            width={650} 
            height={600}
            style={{border: '3px solid #000'}}
            /> */}
            <img 
            src={image3.src}
            alt="avatar" 
            style={{
            width: '100px',
            height: '100px',
            position: 'fixed',
            top: position.y,
            left: position.x
            }}
            />
        </div>
    )
}
