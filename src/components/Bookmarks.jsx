import React from 'react'
import RightSideBar from './RightSideBar'
import BookmarkSearch from './BookmarkSearch'
import BookMarkHeader from './BookMarkHeader'

const Bookmarks = React.memo(() => {
    return (
      <div className='grid grid-cols-2 w-full'>
        <div className=' w-full colspan-1 h-screen p-5 border'>
            <BookMarkHeader/>
            <BookmarkSearch/>
            <div className='w-full flex justify-center'>
            <div className='w-3/2 mt-10'>
                <h1 className='text-4xl font-bold '>Save post for later</h1>
                <p className='text-gray-500 text-sm mt-2 '>Bookmark posts to easily find them again in the future.</p>
            </div>
        </div>


        </div>

        <div className=' w-full colspan-1  h-screen'>
            <RightSideBar/>
        </div>

        


      </div>
    )
  })

export default Bookmarks