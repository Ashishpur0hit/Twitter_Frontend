import React from 'react'
import { Route , Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Explore from './Explore'
import LogOutPage from './LogOutPage'
import LeftSideBar from './LeftSideBar'
import NotificationFeed from './NotificationFeed'
import Message from './Message'
import Bookmarks from './Bookmarks'
import Profile from './Profile'
import Communities from './Communities'


const Pages = React.memo(()=> {
  const location = useLocation()
  const showLeftSideBar = location.pathname != '/';


    return (
      <div className='w-full ms-0.5 flex'>
         
          {showLeftSideBar && <LeftSideBar/>}

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/' element={<LogOutPage/>}/>
          <Route path='/notifications' element={<NotificationFeed/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/bookmarks' element={<Bookmarks/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/community' element={<Communities/>}/>
        </Routes>
      </div>
    )
})

export default Pages