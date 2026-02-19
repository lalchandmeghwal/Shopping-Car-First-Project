import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import useMyStore from '../context/store';
const Order = ({ data }) => {


  const clearCart = useMyStore(state=>state.clearCart);
  const resetForm = useMyStore(state => state.resetForm);

const navitage = useNavigate();

  const continueShopping = ()=>{
  navitage('/');
    clearCart();

    resetForm();

  }
  

  return (
    <div className='max-[620px]:p-5  '>
      <div className='m-auto max-w-150 max-[620px]:max-w-100 text-center border-2 my-15 bg-[#1D2939] border-green-400/50 rounded-2xl p-5 '>
        <div className='mt-8  text-center flex justify-center text-8xl text-green-400 '>
          <FaRegCheckCircle />
        </div>
        <h2 className='text-2xl font-bold my-4 tracking-wider '>Order Confirmed!</h2>
        <p className='text-lg'>Your transaction is complate. A confirmation email has been sent to your accout.</p>

        <div className='border-2 max-w-90 m-auto my-5 mt-10 rounded-lg p-4 text-start border-green-400/50 bg-green-300/15  '>
          <h3 className='text-2xl font-semibold'>{data.name}</h3>
          <p className='text-lg'>{data.address}</p>

        </div>

        <div onClick={continueShopping }  className='bg-[#F54800] text-2xl p-2 cursor-pointer rounded-full max-w-90 m-auto '>
          <button className=' cursor-pointer uppercase font-semibold  '>continue shopping</button>
        </div>


      </div>
    </div>
  )
}

export default Order
