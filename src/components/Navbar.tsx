import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeContext } from '../context/CoffeContext';

export const Navbar = () => {
  const {cart}=useContext(CoffeContext)
  return (
    <div className={`bg-yellow-900 bg-skin-button-muted w-full h-14 flex justify-between px-5 text-white z-40 print:hidden`}>
      <div className="flex flex-row items-center">
        <h1 className="px-2 font-we">
          <i className="fas fa-coffee"></i>
        </h1>
      </div>
      <div className="flex flex-wrap ">
        <div className={`flex items-center lg:flex-row lg:relative lg:top-0 bg-yellow-900 lg:bg-transparent origin-top transition lg:scale-100`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive?'bg-orange-600':''} navbar hover:bg-orange-600`
            }
          >
            <h3 className="block">Home</h3>
          </NavLink>
          <div className='h-5 border'></div>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${isActive?'bg-orange-600':''} navbar hover:bg-orange-600`
            }
          >
            <div className='w-5 h-5 font-semibold bg-red-600 absolute text-[.8rem] top-1 right-1 rounded-full'>{cart.length}</div>
            <h3 className="block">Carrito</h3>
          </NavLink>
          <div className='h-5 border'></div>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${isActive?'bg-orange-600':''} navbar hover:bg-orange-600`
            }
          >
            <h3 className="block">Más...</h3>
          </NavLink>
        </div>
        {/* <div className={` px-3 pt-1 hover:lg:bg-skin-fill hover:cursor-pointer lg:bg-transparent`}>
          <i className="fas fa-bars"></i>
        </div> */}
      </div>
    </div>
  )
}
