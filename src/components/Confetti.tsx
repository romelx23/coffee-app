import React, { useState } from 'react'
import confetti from '../assets/animations/confetti.json'
import { useLottie, useLottieInteractivity } from 'lottie-react';
interface Props {
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
}
export const Confetti = ({ isPlaying, setIsPlaying }: Props) => {
    const [play, setPlay] = useState(isPlaying)
    const style = {
        height: 300
    };
    // console.log(play);

    const options = {
        id: 'confetti',
        animationData: confetti,
        loop: isPlaying,
        autoplay: isPlaying,
        play:45,
        onLoopComplete: () => {
            console.log("complete");
            setIsPlaying(false);
            setPlay(false);
            console.log(isPlaying);
        },
    };

    const { View, animationItem } = useLottie(options, style);

    return (
    <>
        {play?View:null}
    </>
    );
}

