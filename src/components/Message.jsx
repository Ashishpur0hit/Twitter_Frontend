import React from 'react'
import MessageHeader from './MessageHeader'
import MessageLeftBox from './MessageLeftBox'
import MessageRightBox from './MessageRightBox'

function Message() {
  return (
    <div className=' w-full h-screen grid grid-cols-2 border'>
        <div className='colspan-1 '>
                <MessageHeader/>
                <MessageLeftBox/>
        </div>
        <div className='colspan-1   w-full h-screen flex justify-center items-center border'>
                <MessageRightBox/>
        </div>
    </div>
  )
}

export default Message