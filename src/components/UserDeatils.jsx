import React from 'react'
import { CiLocationArrow1 , CiCalendar } from 'react-icons/ci'

function UserDeatils() {
  return (
    <div className='ps-5 pe-5'>
        <h1 className='text-xl font-bold '>Ashish Purohit</h1>
        <p className='text-gray-500 text-sm font-sm mt-1 '>@a_A_sahi</p>
        <p className=' text-sm font-sm mt-1 '>Coding Enthusiastic/ Student / Android Dev</p>
        <div className='flex items-center mt-2'>
            <CiLocationArrow1 size='24px'/>
            <p className='text-gray-500 text-sm mt-1 ms-2'>Haldwani , Uttarakhand</p>

            <CiCalendar size='24px' className='ms-5'/>
            <p className='text-gray-500 text-sm font-sm mt-1 ms-2 '>Joined December 2023</p>
        </div>


        <div className='flex items-center mt-2'>
        <h1 className='text-sm font-bold '>25</h1>
        <p className='text-gray-500 text-sm font-sm  ms-1'>Following</p>

        <h1 className='text-sm font-bold ms-5'>3</h1>
        <p className='text-gray-500 text-sm font-sm ms-1  '>Followers</p>
        </div>



        <div className='grid grid-cols-6 mt-2'>
                    <button className=' h-12 font-bold hover:bg-gray-200 text-sm'>Post</button>
                    <button className=' h-12 font-bold hover:bg-gray-200 text-sm'>Replies</button>
                    <button className=' h-12 font-bold hover:bg-gray-200 text-sm'>Highlights</button>
                    <button className=' h-12 font-bold hover:bg-gray-200 text-sm'>Articles</button>
                    <button className=' h-12 font-bold hover:bg-gray-200 text-sm'>Media</button>
                    <button className=' h-12 font-bold hover:bg-gray-200 text-sm'>Likes</button>
            </div>
    </div>
  )
}

export default UserDeatils