import React from 'react'
import { CiSettings } from 'react-icons/ci'
import RightSideBar from './RightSideBar'

const NotificationHeader = React.memo(()=> {
    return (
        <div className='bg-white'>
            <div className='w-full flex  justify-between pt-5 ps-5 pe-5'>
                <h1 className='text-lg font-bold '>Notifications</h1>
                <CiSettings size="24px"/>
            </div>
            <div className='grid grid-cols-3 '>
                    <button className=' h-14 font-semibold hover:bg-gray-200 '>All</button>
                    <button className=' h-14 font-semibold hover:bg-gray-200 '>Verified</button>
                    <button className=' h-14 font-semibold hover:bg-gray-200 '>Mentioned</button>
            </div>
        </div>
    )
  })

export default NotificationHeader