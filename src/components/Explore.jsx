import React from 'react'
import Feed from './Feed'
import RightSideBar from './RightSideBar'
import Trending from './Trending'
import Search from './Search'

const Explore = React.memo(() => {
    return (
      <div className='w-full grid grid-cols-2'>
        <div className='h-screen w-full overflow-y-auto colspan-1 pt-10 pb-10'>
            <Search/>
            <Trending/>
        </div>

        <div className='w-full colspan-1'>
            <RightSideBar/>
        </div>


      </div>
    )
})

export default Explore