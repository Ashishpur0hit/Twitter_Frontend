import React from 'react'

function MessageLeftBox() {
  return (
    <div className=' w-4/6 p-10 m-10'>
        <h1 className='text-4xl font-bold'>Welcome to Your Inbox!</h1>
        <p className='text-gray-700 text-sm font-sm mt-2 '>Drop a line, share posts and more with private conversations between you and others on X. </p>
        <button className='ps-5 pe-5 pt-2 pb-2 bg-blue-500 text-white text-lg font-bold rounded-full mt-10'>Write a message</button>
    </div>
  )
}

export default MessageLeftBox