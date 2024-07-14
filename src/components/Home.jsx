import React from 'react'
import Feed from './Feed'
import RightSideBar from './RightSideBar'

const Home = React.memo(() => {
  return (
    <div className='w-full grid grid-cols-2 '>

      <div className=' h-screen relative '>
        
      <div className='absolute grid grid-cols-2 border z-10 w-full bg-white'>
          <button className='h-14  hover:bg-gray-300 font-bold'>For You</button>
          <button className='h-14  hover:bg-gray-300 font-bold'>Following</button>
        </div>

        <div className=' absolute h-screen overflow-y-auto z-0 w-full'>
        <Feed />
        </div>

        
        
      </div>

      
      

      <div className='w-full'>
        <RightSideBar/>
      </div>

    </div>

  )
})

export default Home