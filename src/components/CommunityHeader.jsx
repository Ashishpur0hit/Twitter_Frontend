import React from 'react'
import { CiSettings } from 'react-icons/ci'

function CommunityHeader() {
  return (
    <div className='w-full flex  justify-between pt-5 ps-5 pe-5'>
                    <h1 className='text-lg font-bold '>Communities</h1>
                    <CiSettings size="24px" />
                </div>
          
  )
}

export default CommunityHeader