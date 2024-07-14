import React from 'react'
import { CiSettings } from 'react-icons/ci'
import RightSideBar from './RightSideBar'
import MessageRightBox from './MessageRightBox'

const MessageHeader = React.memo(() => {
    return (
        
                <div className='w-full flex  justify-between pt-5 ps-5 pe-5'>
                    <h1 className='text-lg font-bold '>Messages</h1>
                    <CiSettings size="24px" />
                </div>
          
    )
})

export default MessageHeader