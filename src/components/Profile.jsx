import React from 'react'
import ProfileInfo from './ProfileInfo'
import RightSideBar from './RightSideBar'
import UserDeatils from './UserDeatils'
import CreatePost from './CreatePost'
import ProfileHeader from './ProfileHeader'

const Profile = React.memo(() => {
  return (
    <div className='grid grid-cols-2'>

      <div className='h-screen col-span-1 relative'>

        <div className='w-full absolute z-10'>
          <ProfileHeader/>
        </div>

        <div className='h-full overflow-y-auto absolute z-0'>
          <ProfileInfo />
          <UserDeatils />
          <CreatePost PostLink="https://pbs.twimg.com/media/GNeDhWfW8AIta47?format=jpg&name=small" Profile="https://pbs.twimg.com/profile_images/1737391594062635008/VR-sMeiA_400x400.jpg" caption="Learning React js and Express js is worth it ?? I have started  learning web development from Harkirat cohort 0-100
But I heard from a lot of people that it's not worth it  now i am confused and need suggestions  from you guys .
.
.
.
(This is my first web created in react)"/>


          <CreatePost PostLink="https://pbs.twimg.com/media/GIJbFRUXwAA9NYZ?format=jpg&name=small" Profile="https://pbs.twimg.com/profile_images/1737391594062635008/VR-sMeiA_400x400.jpg" caption="Is a social media application integrated with chatbox  is considered as a good level project .

What actually are good level of projects drop some below 👇."/>



        </div>
      </div>



      <div className='col-span-1'>
        <RightSideBar />
      </div>
    </div>
  )
})

export default Profile