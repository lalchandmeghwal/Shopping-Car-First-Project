import React, { useState } from 'react'
import { MyUseContext } from '../context/CartContext'
import SearchBar from '../components/SearchBar';
import CategoryFillter from '../components/CategoryFillter';
import { useNavigate } from 'react-router-dom'
import data  from '../data/data.json'
const ProductsList = () => {


  const { addToCart } = MyUseContext();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filterProducts = data.filter((items) => {
    const searchProducts = items.name.toLowerCase().includes(search.toLocaleLowerCase()) || items.description.toLowerCase().includes(search.toLocaleLowerCase());
    const selectCategory = category === 'All' || items.category === category;
  
    return searchProducts && selectCategory;
  });








  const navigator = useNavigate();

  // car Link 
  const productDetails = (id) => {
    navigator(`/products/${id}`)

  };

  // Add To Cart
  const add_to_cart = (item) => {

    addToCart(item);
  };




  return (
    <div className=''>
      <SearchBar setSearch={setSearch} search={search} />
      <CategoryFillter categoryList={category} setCategory={setCategory} />

      <h2 className='max-w-300  p-4 m-auto text-2xl  font-bold'>Featured Gear ({data.length} Items)</h2>
      <div className='px-4 max-w-300 m-auto flex flex-wrap justify-center  sm:justify-between gap-y-7 '>

        {filterProducts.map((items, i) => {

          return (
            <div onClick={() => productDetails(items.id)} className=' w-70 sticky rounded-2xl overflow-hidden  bg-[#0F1727]    group ' key={i}>
              <div className='relative overflow-hidden '>
                <img className=' group-hover:scale-110 w-full h-60  ' src={items?.image} alt="" />
                <div className='absolute bottom-0     text-2xl rounded-tr-2xl p-2 px-4 bg-orange-600 z-40'>
                  <h2>₹{((items.price).toFixed(2))}</h2>
                </div>
              </div>

              <div className='p-4'>
                <h3 className='text-2xl font-semibold line-clamp-1 '>{items.name}</h3>
                <p className='my-2 text-lg line-clamp-3 '>{items.description}</p>
                <button className='border p-1 bg-gray-800 border-gray-400/30 rounded-2xl px-3 text-lg '>{items.category}</button>
                <div
                  onClick={e => {
                    e.stopPropagation();
                    add_to_cart(items);
                  }}

                  className='mt-3 mb-2'>
                  <button className=' cursor-pointer bg-[#F54800]  rounded-full w-full px-2 py-2 text-2xl capitalize '>Add To Cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}



export default ProductsList
