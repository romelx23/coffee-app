import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react'

interface LottieProps {
    play?: boolean
    loop?: boolean
    goTo?: number
    name: string
    animationData: any
    style: object
    goToAndStop?: () => void,
    complete?:boolean
}

export const LottieComponent = ({ animationData, name,style,goTo=0,play=false,loop=false,complete=false }: LottieProps) => {
    const lottie = useRef(null)
    useEffect(() => {
        if (lottie.current) {
            const item=Lottie.loadAnimation({
                name: name,
                container: lottie.current,
                renderer: 'svg',
                loop: loop,
                autoplay: play,
                animationData: animationData,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            });
            item.goToAndPlay(goTo, true);
            complete===true?item.goToAndStop(goTo, true):null
        }
    }, [goTo,loop,play])

    return (
        <div ref={lottie} style={{...style}}>
        </div>
    )
}
