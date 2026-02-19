import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiZap } from "react-icons/fi";
import useMyStore from '../context/store';


const Cart = () => {

  // const { cart, totalPrice, addToCart, removeFromCart, cartCount } = MyUseContext();

  const cart = useMyStore(state => state.cart)
  const addToCart = useMyStore(state => state.addToCart)
  const removeFromCart = useMyStore(state => state.removeFromCart)

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cart.reduce((total, item) => total + (item.quantity * item.price), 0)


  return (
    <div>
      <div className='max-w-300 m-auto my-5 min-h-screen rounded-2xl p-10 mt-8 bg-[#0F1727] '>

        <NavLink to={'/'}>

          <h3 className='text-xl font-semibold text-white/90 flex items-center gap-1 cursor-pointer '>
            <FaChevronLeft />
            Back to All Products</h3>
        </NavLink>
        <h2 className='my-10 text-5xl font-semibold'> Shopping Cart ({cart.length}) </h2>
        
        {cartCount !== 0 &&
          <div className=' h-full flex items-start   justify-between flex-col lg:flex-row    ' >

            <div className='max-w-185 flex-1 '>


              {cart.map((items, i) => {

                return (
                  <div key={i} className='flex border flex-col gap-5 sm:gap-0 sm:flex-row items-start border-gray-300/30 text-lg justify-between   sm:items-center   my-3 p-4 rounded-lg bg-[#1D2939] ' >

                    <div className='flex items-center '>
                      <div className='w-30 border-4 border-[#1D2939] overflow-hidden rounded-2xl'  >
                        <img className='h-full transition-all duration-1000  hover:scale-125' src={items.image} alt="" />
                      </div>
                      <div className='max-w-65   p-4 ' >
                        <h3 className=' font-bold text-[17px] line-clamp-1   '>{items.name}</h3>
                        <h3 className='text-2xl font-bold  text-orange-400 '>₹{((items.price).toFixed(2))}</h3>


                      </div>
                    </div>

                    <div className='max-w-70   items-center justify-between flex  flex-1 ' >

                      <div className='border w-30 rounded-full border-gray-300/30 px-3 py-1  bg-gray-600/50 flex justify-between text-2xl '>
                        <button onClick={() => removeFromCart(items.id)} className='cursor-pointer'><FaMinus /></button>
                        <span className=' px-1 border-t-2 border-b-2 border-black ' >{items.quantity}</span>
                        <button onClick={() => addToCart(items)} className='cursor-pointer'><FaPlus /></button>
                      </div>
                      <h3 className=' font-bold  text-orange-400 '>₹{((items.price).toFixed(2))}</h3>
                      <div onClick={() => removeFromCart(items.id, true)} className='bg-red-400/70 w-7 h-7 flex justify-center items-center cursor-pointer  rounded-full text-2xl '>
                        <button className=' cursor-pointer'><IoClose /></button>
                      </div>

                    </div>

                  </div>

                )
              })}
            </div>


            <div className='w-80  p-7 mt-3 sticky top-20   border border-orange-600/50 border-l-4 rounded-lg bg-[#1D2939] '>
              <h2 className='text-4xl font-bold'> <span className='text-orange-400'>₹</span> Order Total </h2>
              <hr className='my-2' />

              <div className='flex justify-between items-center text-lg my-2'>
                <p>Subtotal:</p>
                <h3 className='text-lg font-semibold'>₹{totalPrice.toFixed(2)}</h3>
              </div>

              <div className='flex justify-between items-center text-lg my-2'>
                <p>Shipping (Express):</p>
                <h3 className='text-2xl font-semibold text-[#24CA7A] '>Free</h3>
              </div>
              <hr className='my-2' />

              <div className='flex justify-between items-center text-lg '>
                <h2 className='text-2xl font-bold'>Estimate</h2>
                <h3 className='text-2xl font-bold text-orange-400'>₹{totalPrice.toFixed(2)}</h3>
              </div>
              <h2 className='text-2xl font-bold'>Total:</h2>

              <NavLink to={'/checkout'}>


                <div className='bg-[#F54800] shadow-[0px_0px_10px] shadow-orange-600 p-2 my-4 rounded-full text-center text-2xl cursor-pointer font-semibold '>
                  <button className='flex items-center cursor-pointer gap-2'>
                    <FiZap />
                    PROCED SECURELY
                  </button>
                </div>

              </NavLink>


              <p>All transactions are eencrypted and secure.</p>


            </div>






          </div>
        }

      </div>


    </div>
  )
}

export default Cart
