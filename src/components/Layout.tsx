import React, { FC } from 'react'
import { Navbar } from './Navbar'

export const Layout:FC = ({children}) => {
  return (
    <div className='w-full min-h-screen bg-gray-800'>
        <Navbar/>
        {children}
    </div>
  )
}
