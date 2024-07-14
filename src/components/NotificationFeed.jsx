import React from 'react'
import NotificationHeader from './NotificationHeader';
import RightSideBar from './RightSideBar';
import NotificationMessage from './NotificationMessage';
import NotificationScroll from './NotificationScroll';

const NotificationFeed = React.memo(() => {
    return (
      <div className=' w-full grid grid-cols-2 '>
        <div className=' w-full colspan-1 relative '>
        <div className=' w-full absolute z-10'>
        <NotificationHeader/>
        </div>
        <div className='w-full h-screen overflow-y-auto  absolute z-0'>
            <NotificationScroll/>
        
        </div>
        </div>
        <div className='colspan-1'>
        <RightSideBar/>
        </div>
      </div>
    )
});

export default NotificationFeed