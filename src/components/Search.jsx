import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = React.memo(()=> {
    return (
      <div className='bg-gray-300 h-12 flex items-center ps-5 pe-5 pt-2 pb-2 w-full rounded-full'>
          <FaSearch />
          <input className='w-full bg-gray-300 ms-2 outline-none ' type="text" placeholder='Search Events ..' />
        </div>
  
    )
  })

export default Search