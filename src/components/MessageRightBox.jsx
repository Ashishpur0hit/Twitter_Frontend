import React from 'react'

function MessageRightBox() {
  return (
    <div className=' w-4/6 p-10 m-10 '>
        <h1 className='text-4xl font-bold'>Select a message</h1>
        <p className='text-gray-700 text-sm font-sm mt-2 '>Choose from your existing conversations, start a new one, or just keep swimming.</p>
        <button className='ps-5 pe-5 pt-2 pb-2 bg-blue-500 text-white text-lg font-bold rounded-full mt-10'>New messages</button>
    </div>
  )
}

export default MessageRightBox