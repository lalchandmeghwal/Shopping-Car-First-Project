import { IoLocationOutline } from "react-icons/io5";
import { MyUseContext } from "../context/CartContext";
import { useState } from "react";


import Order from '../pages/Order';




const CheckOut = () => {



  const { cart, totalPrice } = MyUseContext();
  const [isOrder, setIsOrder] = useState(false);


  const inputName = {
    name: '',
    address: '',
    city: '',
    zip: '',
  };


  const [input, setInput] = useState(inputName);
  const [form, setForm] = useState({});
  

  const handelInput = (e) => {
    const {name, value} = e.target;
    setInput({...input,[name]:value});
   

  }

const handelFormSubmit = (e)=>{
e.preventDefault();

setForm({...input});



setIsOrder(true);

setInput(inputName);
  };

  if(isOrder) return <Order data={form}/>


  return (
    <div>

      <div className='max-w-300  max-[750px]:p-5 max-[1090px]:p-5  m-auto ' >
        <h2 className=' text-4xl my-4 font-bold '>Finalize Order</h2>

        <div className='flex items-start   max-[750px]:flex-col justify-center sm:justify-between   max-[750px]:items-center    gap-8  '>


          <div className='    border   border-gray-300/30 w-full  p-2   my-3 sm:p-8 rounded-lg bg-[#1D2939] '>
            <h3 className='text-2xl text-orange-300 font-bold flex items-center gap-2 '> <IoLocationOutline className="text-3xl" /> Shopping Information</h3>
            <hr className="my-2" />

            <form onSubmit={handelFormSubmit} className="flex flex-col gap-5 my-5 w-auto sm:max-w-200  " >

              <div className=" flex text-xl flex-col gap-2 " >
                <label htmlFor="name">Name</label>
                <input
                  value={input.name}
                  name="name"
                  onChange={handelInput}
                  required

                  type="text" id="name" className="border-gray-300/30 bg-gray-300/20 max-w-full p-3 outline-0 border rounded-lg " />
              </div>

              <div className=" flex text-xl flex-col gap-2 " >
                <label htmlFor="address">Address</label>
                <input
                  value={input.address}
                  name="address"
                  onChange={handelInput}
                  required
                  type="text" id="address" className="border-gray-300/30 bg-gray-300/20 max-w-full p-3 outline-0 border rounded-lg " />
              </div>

              <div className=" flex text-xl flex-col gap-2 " >
                <label htmlFor="city">City</label>
                <input
                  value={input.city}
                  name="city"
                  onChange={handelInput}
                  required
                  type="text" id="city" className="border-gray-300/30 bg-gray-300/20 max-w-full p-3 outline-0 border rounded-lg " />
              </div>

              <div className=" flex text-xl flex-col gap-2 " >
                <label htmlFor="code">Zip Code</label>
                <input
                 value={input.zip}
                name="zip"
                onChange={handelInput}
                required
                 type="text" id="code" className="border-gray-300/30 bg-gray-300/20 max-w-full p-3  cursor-pointer outline-0 border rounded-lg " />
              </div>

              <div className=" bg-orange-600 rounded-lg shadow-[0px_0px_10px] hover:bg-orange-700 shadow-orange-500 flex text-xl flex-col gap-2 p-3 " >
                <button className="text-2xl uppercase font-bold cursor-pointer">₹ pay and confirm order (₹{totalPrice.toFixed(2)})</button>
              </div>

            </form>

          </div>




          {/*  Summary */}
          <div className=" max-[750px]:w-full   ">
            <div className=' w-full    p-7 mt-3 sticky top-20   border border-orange-600/50 border-l-4 rounded-lg bg-[#1D2939] '>
              <h2 className='text-4xl font-bold'> <span className='text-orange-400'>₹</span> Summary </h2>
              <hr className='my-2' />

              <ul>
                <Summary cart={cart} />
              </ul>

              <div className="mt-2 text-gray-400 p-4">

                <div className='flex justify-between items-center text-lg '>
                  <p>Subtotal:</p>
                  <h3 className='text-lg text-white font-semibold'>₹{totalPrice.toFixed(2)}</h3>
                </div>

                <div className='flex justify-between items-center text-lg '>
                  <p>Shipping</p>
                  <h3 className='text-2xl font-semibold text-[#24CA7A] '>Free</h3>
                </div>

              </div>
              <hr />

              <h3 className="text-center text-5xl text-orange-500 font-bold my-2">₹{totalPrice.toFixed(2)}</h3>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CheckOut


const Summary = ({ cart }) => {
  return cart.map((item, i) => {
    return (
      <li className=' border-b my-1 flex justify-between  ' key={i} >
        <span className=' line-clamp-1 w-40 ' >{item.name} </span>
        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
      </li>
    )
  })
}