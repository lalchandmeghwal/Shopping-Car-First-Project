import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { MyUseContext } from '../context/CartContext';
import { FaChevronLeft } from "react-icons/fa";
import { LuTag } from "react-icons/lu";
import { FiZap } from "react-icons/fi";

const ProductsDetails = () => {
  const productId = useParams().id;

  const { data,addToCart, } = MyUseContext();

  const singoleProduct = data.find((items, i) => items.id == productId);


  return (
    <div>
      <div className='max-w-300 m-auto my-5 min-h-screen rounded-2xl p-10 mt-8 bg-[#0F1727] '>

        <NavLink to={'/'}>

          <h3 className='text-xl font-semibold text-orange-300/90 flex items-center gap-1 cursor-pointer '>
            <FaChevronLeft />
            Back to All Products</h3>
        </NavLink>

        <div className=' h-full flex flex-wrap  justify-start  xl:justify-between  items-start pt-15 gap-5 ' >

          <div className='w-100 border-4 border-[#1D2939] overflow-hidden rounded-2xl'  >
            <img className=' transition-all duration-1000  hover:scale-125' src={singoleProduct.image} alt="" />
          </div>
          <div className='w-140 p-4 ' >
            <h3 className='text-lg font-normal  sm:text-2xl sm:tracking-widest sm:font-bold '>{singoleProduct.name}</h3>
            <h3 className='text-2xl font-bold my-2 text-orange-400 '>₹{((singoleProduct.price).toFixed(2))}</h3>
            <div className='flex items-center gap-2 text-lg font-semibold'>
              <LuTag className='text-orange-400' />
              <span>Product Overview</span>

            </div>
            <div className='h-px bg-orange-400/50 my-1 '></div>
            <p className=' my-2'>{singoleProduct.description}</p>

            <ul className='border border-gray-300/30 text-lg flex flex-col gap-2 my-3 p-4 rounded-lg bg-[#1D2939]'>
              <li className='flex items-center gap-2'> <FiZap className='text-orange-400' />  High-Quality, Professional Grade Materials</li>
              <li className='flex items-center gap-2'> <FiZap className='text-orange-400' /> Comprehensive 1-Year Manufacturer Warranty</li>
              <li className='flex items-center gap-2'> <FiZap className='text-orange-400' /> Immediate Shipping for In-Stock Items</li>
            </ul>

            <div  onClick={()=>addToCart(singoleProduct)}  className='bg-[#F54800] hover:bg-orange-700 p-2 cursor-pointer rounded-full my-2 text-center text-2xl font-bold ' >
              <button className='cursor-pointer'>ADD TO CART</button>
            </div>

            <NavLink to={'/'}>
              
            <div className='border-3  border-[#F54800]  p-2 cursor-pointer rounded-full my-3 text-center text-lg font-bold ' >
              <button className='cursor-pointer text-orange-400 '>KEEP SHOPPING</button>
            </div>
            </NavLink>



            <div>



            </div>

          </div>


        </div>

      </div>


    </div>
  )
}

export default ProductsDetails
