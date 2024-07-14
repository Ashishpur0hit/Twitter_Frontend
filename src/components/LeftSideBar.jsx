import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CiHome , CiSearch , CiBellOn , CiBookmark , CiUser , CiDesktopMouse1 } from 'react-icons/ci';

const LeftSideBar = React.memo(()=> {

    const navigate = useNavigate();




    return (
      <div className='  w-3/2 h-auto flex flex-col p-14  '>
        <img  className='w-16 h-auto p-2' src="twitterLogo.png" alt="X-logo" />
        
        <NavLink className='flex m-2 pt-1 pb-1 ps-4 pe-4 font-lg  items-center rounded-full hover:bg-gray-200' to={'/home'}>
            <CiHome style={{strokeWidth: 1 }} className='w-10 h-auto p-2 '/>
            <h3 className='font-semibold'>Home</h3>
        </NavLink>

        
        <NavLink className='flex m-2 pt-1 pb-1 ps-4 pe-4 font-lg  items-center rounded-full hover:bg-gray-200' to={'/explore'}>
            <CiSearch  style={{strokeWidth: 1 }}  className='w-10 h-auto p-2'/>
            <h3 className='font-semibold'>Explore</h3>
        </NavLink>


        <NavLink className='flex m-2 pt-1 pb-1 ps-4 pe-4 font-lg  items-center rounded-full hover:bg-gray-200' to={'/notifications'}>
            <CiBellOn style={{strokeWidth: 1 }}  className='w-10 h-auto p-2'/>
            <h3 className='font-semibold'>Notifications</h3>
        </NavLink>


        <NavLink className='flex m-2 pt-1 pb-1 ps-4 pe-4 font-lg  items-center rounded-full hover:bg-gray-200' to={'/message'}>
            <CiDesktopMouse1 style={{strokeWidth: 1 }}  className='w-10 h-auto p-2'/>
            <h3 className='font-semibold'>Message</h3>
        </NavLink>


      


        <NavLink className='flex m-2 pt-1 pb-1 ps-4 pe-4 font-lg  items-center rounded-full hover:bg-gray-200' to={'/bookmarks'}>
            <CiBookmark style={{strokeWidth: 1 }}  className='w-10 h-auto p-2'/>
            <h3 className='font-semibold'>Bookmarks</h3>
        </NavLink>

        <NavLink className='flex m-2 pt-1 pb-1 ps-4 pe-4 font-lg  items-center rounded-full hover:bg-gray-200' to={'/community'}>
            <CiUser style={{strokeWidth: 1 }}  className='w-10 h-auto p-2'/>
            <h3 className='font-semibold'>Community</h3>
        </NavLink>

        <NavLink className='flex m-2 pt-1 pb-1 ps-4 pe-4 font-lg  items-center rounded-full hover:bg-gray-200' to={'/profile'}>
            <CiUser style={{strokeWidth: 1 }}  className='w-10 h-auto p-2'/>
            <h3 className='font-semibold'>Profile</h3>
        </NavLink>


        <button className=" m-2 p-2 font-lg bg-blue-600  rounded-xl hover:bg-blue-700" onClick={()=>{
            navigate('/');
        }}>
                <h3 className='font-bold text-white' > Log Out </h3>
        </button>
        

      </div>
    )
  })

export default LeftSideBar