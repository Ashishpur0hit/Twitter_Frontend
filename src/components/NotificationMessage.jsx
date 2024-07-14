import React from 'react'
import { CiCircleMore } from 'react-icons/ci'

const NotificationMessage = React.memo(({Profile , Caption , UserName}) => {
    return (
      <div className='border-2 p-2'>
        <div className='flex justify-between items-center'>
        <div className='flex items-center'>
        <img className='rounded-full w-10 h-10' src= {Profile} alt="profile" />
        <p className='text-sm ms-2 font-semibold'>{UserName}</p>
      </div>
        <CiCircleMore size='24px' />
      </div>

      <p className='mt-2 text-gray-700 text-sm'>{Caption}</p>
      </div>
    )
})

export default NotificationMessage