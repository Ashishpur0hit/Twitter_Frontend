import React from 'react'
import { FaSearch } from 'react-icons/fa'
function BookmarkSearch() {
  return (
    <div className='bg-white h-12 flex border items-center ps-5 pe-5 pt-2 pb-2 w-full rounded-full mt-5'>
          <FaSearch />
          <input className='w-full  ms-2 outline-none ' type="text" placeholder='Search Bookmarks' />
        </div>
  )
}

export default BookmarkSearch