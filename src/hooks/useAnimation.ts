// show and hidden animation hook
import { useState, useEffect } from 'react';
interface Props {
    show: boolean;
}
export const useAnimate = (show:boolean) => {
    const [hidden, setHidden] = useState(show)
    useEffect(() => {
        if (show) {
            setHidden(false)
        }
        else {
            setHidden(true)
        }
    }, [show])
    return {
        hidden,
        setHidden
    }
}