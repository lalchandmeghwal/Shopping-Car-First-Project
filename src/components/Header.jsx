import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { NavLink, Outlet } from 'react-router-dom';

import { FiHome } from "react-icons/fi";
import { MyUseContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
const Header = () => {

  const {cartCount,} = MyUseContext();
 



  return (
    <div >

      <div className=' border-b w-full sticky bg-[#020610] top-0 z-40 border-orange-400/45 p-4 '>
        <header className=' max-w-300 m-auto flex justify-between items-center  '>

          <NavLink to={'/'}>
            <div className='flex items-center font-bold gap-2  text-4xl'>

              <FiHome className='text-orange-400  ' />

              <h2 className=' tracking-widest ' >LALA<span className='text-orange-400'>STORE</span> </h2>

            </div>
          </NavLink>
          

          <NavLink to={'/cart'}>
            <div className=' cursor-pointer relative'>
              <div className=' border p-1 bg-orange-500/10 px-2 border-orange-500/50 rounded-lg '>
                <CiShoppingCart className='text-3xl text-orange-500 font-bold cursor-pointer ' />
              </div>
              {cartCount !== 0 && <span className='absolute -top-2.5 -right-2 rounded-full w-6 h-6 p-4 text-lg bg-red-600 flex justify-center items-center '>{cartCount}</span>}
            </div>
          </NavLink>

        </header>
      </div>

      <div>

        <Outlet />
      </div>
  <ToastContainer position="top-center"autoClose={1000} />
    </div>
  )
}

export default Header
