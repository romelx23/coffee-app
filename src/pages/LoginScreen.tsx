import React from 'react'
import { Layout } from '../components/Layout';

export const LoginScreen = () => {
  return (
    <Layout>
      <div className="p-3 w-full h-full">
        <h1 className='font-semibold text-4xl font-sansita'>Productos y Más</h1>
        <div className="grid grid-cols-cards gap-5 p-3 h-60">
          <div className="card__product">
            <h1 className='text-2xl font-semibold font-sansita'>Café en bolsa</h1>
            <h2 className='text-2xl font-semibold font-sansita'>Dorado</h2>
          </div>
          <div className="w-full h-60 bg-orange-700">
            <img src="https://plazavea.vteximg.com.br/arquivos/ids/494249-1000-1000/20181624.jpg?v=637401925276700000" alt="cafe" className='h-60 w-full object-cover' />
          </div>
          <div className="card__product">
            <h1 className='text-2xl font-semibold font-sansita'>Café en bolsa</h1>
            <h2 className='text-2xl font-semibold font-sansita'>Morado</h2>
          </div>
          <div className="w-full h-60 bg-orange-700">
            <img src="https://plazavea.vteximg.com.br/arquivos/ids/1244769-1000-1000/20191589.jpg?v=637516810346030000" alt="cafe" className='h-60 w-full object-cover' />
          </div>
          <div className="card__product">
            <h1 className='text-2xl font-semibold font-sansita'>Café en bolsa</h1>
            <h2 className='text-2xl font-semibold font-sansita'>Rojo</h2>
          </div>
          <div className="w-full h-60 bg-orange-700">
            <img src="https://plazavea.vteximg.com.br/arquivos/ids/402884-1000-1000/20200909.jpg?v=637346941581330000" alt="cafe" className='h-60 w-full object-cover' />
          </div>
          <div className="card__product">
            <h1 className='text-2xl font-semibold font-sansita'>Café en bolsa</h1>
            <h2 className='text-2xl font-semibold font-sansita'>Marron y Verde</h2>
          </div>
          <div className="w-full h-60 bg-orange-700">
            <img src="https://cafegourmet.mx/wp-content/uploads/2017/11/cafe-bolsa.png" alt="cafe" className='h-60 w-full object-cover' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
