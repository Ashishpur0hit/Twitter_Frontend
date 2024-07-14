import React from 'react'

const BookMarkHeader = React.memo(()=> {
    return (
      <div className='w-full'>
        <h1 className='text-xl font-bold'>Bookmarks</h1>
        <p className='text-sm text-gray-500 '>@a_A_sahi</p>
      </div>
    )
  })

export default BookMarkHeader