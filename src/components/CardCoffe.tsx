import React, { useContext, useEffect, useState } from 'react'
import { Confetti } from './Confetti';
import { CoffeContext } from '../context/CoffeContext';
import { Toast } from './Toast';
import { useParams } from 'react-router-dom';

interface Props {
    coffe: {
        title: string;
        description: string;
        ingredients: string[];
        image: string;
        price: number;
        quantity: number;
        id: number;
    },
    type: string;
}
export const CardCoffe = ({ coffe, type }: Props) => {
    const {name}=useParams();
    const { addToCart, cart } = useContext(CoffeContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const handleAnimate = () => {
        // validate already coffe in the cart
        const isInCart = cart.find(item => item.id === coffe.id);
        if (isInCart) {
            setIsAdded(true);
            // during 3 seconds
            setTimeout(() => {
                setIsAdded(false);
            }, 4000);
            // alert('This coffe is already in the cart');
            return;
        }
        addToCart({ ...coffe });
        setIsPlaying(true);
    }
    useEffect(() => {
        return () => {
            setIsAdded(false);
        }
    }, [])

    return (
        <>
            <div key={coffe.id} className={` w-80 h-72 bg-orange-700 rounded-lg text-left p-3 flex flex-col gap-3 animate-fade-slow`}>
                <h1 className='font-semibold'>{coffe.title} <i className="fas fa-coffee"></i></h1>
                {/* <p>{coffe.description}</p> */}
                <img src={coffe.image} alt="coffe" className='object-cover w-full h-32' />
                <h2 className='font-bold text-right'>S/.{coffe.price}.00</h2>
                <button onClick={handleAnimate} className='bg-orange-50 text-black px-4 py-1 rounded-md text-base hover:bg-orange-800 hover:text-white transition'>
                    Get Start
                </button>
            </div>
            <div className='fixed right-0 bottom-0 pointer-events-none'>
                {
                    isPlaying ? <Confetti isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> : null
                }
            </div>
            {
                isPlaying ? <Toast
                    message='Se agrego al carrito'
                    icon='fas fa-info-circle'
                    positionY='bottom-3'
                /> : null
            }
            {
                isAdded ? <Toast
                    message='Ya está en el carrito'
                    icon='fas fa-info-circle'
                    color='bg-yellow-500'
                    positionY='top-3'
                /> : null
            }
        </>
    )
}
