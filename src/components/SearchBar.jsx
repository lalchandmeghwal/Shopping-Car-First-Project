import { FaSearch } from "react-icons/fa";

const Search = ({ setSearch,search}) => {
    return (
        <div>
            <div className='max-w-300 m-auto my-5 bg-gray-800 p-3 rounded-xl '>
                <div className='flex items-center p-4 rounded-xl text-2xl gap-5 bg-gray-700 ' >
                    <FaSearch />
                    <input onChange={(e)=>setSearch(e.target.value)} className=' outline-0 w-full ' type="search" placeholder='Search hight-performance electronics by name of fearute...' />
                </div>


            </div>
        </div>
    )
}

export default Search
