import React, { useContext } from 'react'
import { Layout } from '../components/Layout';
import { CoffeContext } from '../context/CoffeContext';
import { Coffee } from '../interfaces/coffeInterface';

export const MenuScreen = () => {
  const { cart, total, removeFromCart, handleMore, handleMinus } = useContext(CoffeContext);
  const carrito: Coffee[] = [];
  const handlePrint = () => {
    // imprime el contenido del div
    window.print();
  }

  return (
    <Layout>
      <h1 className='font-semibold text-3xl my-3'>Boleta de Pago</h1>
      <div className="py-2 overflow-x-auto sm:px-6 pr-10 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-800 shadow-dashboard px-8 pt-3 rounded-lg min-h-min print:bg-black print:px-0 print:pl-6 print:break-before-avoid-page">
          <table className="min-w-full print:overflow-hidden">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Nombre</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Precio</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Ingredientes</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Imagen</th>
                {
                  cart.length > 0 && <th className="px-6 py-3 border-b-2 border-gray-300 text-white">
                    <button onClick={handlePrint} className='btn border-cyan-500 text-cyan-500 hover:bg-cyan-700 print:hidden'>Imprimir Boleta</button>
                  </th>
                }
              </tr>
            </thead>
            <tbody className="">
              {
                cart.map((coffe, i) => {
                  return <tr className='font-semibold text-lg' key={i}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="flex items-center">
                        <div>
                          <div className=" leading-5 text-white">{i + 1}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className=" leading-5 text-white">{coffe.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">S/.{coffe.price * coffe.quantity}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">{coffe.ingredients}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5"><img src={coffe.image} alt="coffe" className='w-12 h-12 object-cover' /></td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 space-x-2 print:hidden">
                      <div className='flex justify-center gap-2 items-center'>
                        <button onClick={() => handleMinus(coffe.id)} className="btn border-blue-500 text-blue-500 hover:bg-blue-700">
                          <i className="fas fa-minus"></i>
                        </button>
                        <h1>{coffe.quantity}</h1>
                        <button onClick={() => handleMore(coffe.id)} className="btn border-blue-500 text-blue-500 hover:bg-blue-700">
                          <i className="fas fa-plus"></i>
                        </button>

                        <button onClick={() => removeFromCart(coffe)} className="btn hover:bg-red-700 border-red-500 text-red-500">
                          <i className="fas fa-backspace"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
        <div className="w-full">
          {
            cart.length > 0 ?
              <h2 className='text-white font-semibold text-3xl'>
                El total es : S/.{total}.00
              </h2>
              :
              <div className="text-center my-3">
                <h2 className='text-white font-semibold text-2xl'>Agregue Productos al carrito</h2>
              </div>

          }
        </div>
      </div>
    </Layout>
  )
}
