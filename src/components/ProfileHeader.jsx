import React from 'react'
import { CiSettings } from 'react-icons/ci'
function ProfileHeader() {
  return (
    <div className='w-full flex  justify-between p-2 bg-white'>
                    <div>
                    <h1 className='text-lg font-bold '>Ashish Purohit</h1>
                    <p className='text-gray-500  text-xs '>2 Posts</p>
                    </div>
                    <CiSettings size="24px" />
                </div>
          
  )
}

export default ProfileHeader