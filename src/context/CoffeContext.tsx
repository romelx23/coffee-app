import { createContext, useState } from "react";
import { Coffee } from '../interfaces/coffeInterface';

interface Props {
    children: JSX.Element;
}

interface Context {
    coffes: Coffee[];
    setCoffees: (coffee: Coffee[]) => void;
    cart: Coffee[],
    setCart: (coffee: Coffee[]) => void,
    addToCart: (coffee: Coffee) => void,
    removeFromCart: (coffee: Coffee) => void,
    total: number,
    setTotal: (a:number) => void,
    handleMore:(id:number) => void,
    handleMinus:(id:number) => void,
}
  
export const CoffeContext = createContext<Context>({
    coffes: [],
    setCoffees: () => {},
    cart: [],
    setCart: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    total: 0,
    setTotal: () => {},
    handleMore: () => {},
    handleMinus: () => {},
});

export const CoffeProvider =({children}: Props)=>{
    const [coffes, setCoffees] = useState<Coffee[]>([]);
    const [cart, setCart] = useState<Coffee[]>([]);
    const [total, setTotal] = useState(0);
    const addToCart = (coffe:Coffee) => {
        setCart([...cart, coffe]);
        setTotal(total + coffe.price);
    }
    const removeFromCart = (coffe:Coffee) => {
        setCart(cart.filter(item => item.id !== coffe.id));
        setTotal(total - coffe.price*coffe.quantity);
    }
    const handleMore = (id:number) => {
        const newCart = cart.map((item:Coffee) => {
          if(item.id === id){
            item.quantity += 1;
            setTotal(item.price + total);
          }
          return item;
        });
        setCart(newCart);
      }
    const handleMinus = (id:number) => {
        const newCart = cart.map((item:Coffee) => {
          if(item.id === id){
            if(item.quantity === 1){
                return item;
            }else{
                item.quantity -= 1;
                setTotal(total-item.price);
                }
          }
          return item;
        });
        setCart(newCart);
      }
    return(
        <CoffeContext.Provider value={{
            coffes,
            setCoffees,
            cart,
            setCart,
            addToCart,
            removeFromCart,
            total,
            setTotal,
            handleMore,
            handleMinus
        }}>
            {children}
        </CoffeContext.Provider>
    )
}