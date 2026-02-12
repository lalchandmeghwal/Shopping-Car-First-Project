import React from 'react'

import category from '../data/data.json';
import { HiOutlineTag } from "react-icons/hi2";
import { Tag } from 'lucide-react';

const CategoryFillter = ({categoryList, setCategory}) => {
    // new Set(category.map(p) => p.category)

    const availableCategory = ['All', ...new Set(category.map(p => p.category))];


    const selectCategory = 'Phone'
    // text-lg cursor-pointer border border-white px-4 rounded-2xl p-1

    return (
        <div className='max-w-300 m-auto'>
            <div className=' items- hidden sm:flex  gap-5'>

                <div className='text-2xl text-orange-400' >
                    <Tag />
                </div>

                {availableCategory.map((items, i) => (
                    <button
                    onClick={()=>setCategory(items)}
                        className={`px-5 py-2 text-sm cursor-pointer  font-bold rounded-full transition-all duration-200  shadow-md
                             ${categoryList === items ? 'bg-orange-600 text-white shadow-orange-800/50 ' :
                            'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border-gray-700'}  `}

                        key={i}>{items}</button>
                ))}
            </div>
            <hr className='my-5 border-0.2 border-gray-500/50 ' />

        </div>
    )
}

export default CategoryFillter
