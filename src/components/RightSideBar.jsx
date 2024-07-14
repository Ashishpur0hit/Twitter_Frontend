import React from 'react';
import Trending from './Trending';
import Search from './Search'
import { useLocation } from 'react-router-dom';


const RightSideBar = React.memo(() => {

  const location = useLocation();



  return (
    <div className='w-full h-screen overflow-y-auto p-10 flex flex-col'>


      {location.pathname !== '/explore' && <Search />}
      
        <div className='border p-2 rounded-xl mt-16'>
          <h1 className='text-lg font-bold m-2'>Relevant People</h1>
          <div className='flex items-center justify-between'>
            <div className='flex'>
              <img className='w-12 h-12 rounded-lg' src="https://pbs.twimg.com/profile_images/1683501992314798080/xl1POYLw_400x400.jpg" alt="Profile" />
              <div className='m-2'>
                <h2 className='font-semibold'>Bybit</h2>
                <h3 className='text-sm'>@Bybit_Official</h3>
              </div>
            </div>
            <button className='bg-blue-500 rounded-full ps-10 pe-10 pt-2 pb-2 text-white'>Follow</button>
          </div>
          <p className='bg-gray-100 p-5'>The Most Reliable Crypto Exchange #WeAreBybit Team Principal Sponsor for @RedbullRacing 🏎️</p>
        </div>

        {location.pathname !== '/explore' && <Trending />}


        <div className='border p-2 rounded-xl mt-16 '>
          <h1 className='text-lg font-bold m-2'>Who To Follow</h1>
          <div className='flex items-center justify-between hover:bg-gray-200'>
            <div className='flex'>
              <img className='w-12 h-12 rounded-lg' src="https://pbs.twimg.com/profile_images/1683501992314798080/xl1POYLw_400x400.jpg" alt="Profile" />
              <div className='m-2'>
                <h2 className='font-semibold'>Bybit</h2>
                <h3 className='text-sm'>@Bybit_Official</h3>
              </div>
            </div>
            <button className='bg-blue-500 rounded-full ps-10 pe-10 pt-2 pb-2 text-white'>Follow</button>
          </div>

          <div className='flex items-center justify-between hover:bg-gray-200'>
            <div className='flex'>
              <img className='w-12 h-12 rounded-lg' src="https://pbs.twimg.com/media/GSOPZnOWoAArr0w?format=jpg&name=small" alt="Profile" />
              <div className='m-2'>
                <h2 className='font-semibold'>Bybit</h2>
                <h3 className='text-sm'>@Bybit_Official</h3>
              </div>
            </div>
            <button className='bg-blue-500 rounded-full ps-10 pe-10 pt-2 pb-2 text-white'>Follow</button>
          </div>

          <div className='flex items-center justify-between hover:bg-gray-200'>
            <div className='flex'>
              <img className='w-12 h-12 rounded-lg' src="https://pbs.twimg.com/semantic_core_img/1807906778169909248/PYi_uIQO?format=jpg&name=240x240" alt="Profile" />
              <div className='m-2'>
                <h2 className='font-semibold'>Bybit</h2>
                <h3 className='text-sm'>@Bybit_Official</h3>
              </div>
            </div>
            <button className='bg-blue-500 rounded-full ps-10 pe-10 pt-2 pb-2 text-white'>Follow</button>
          </div>


          
          
        </div>



    </div>
  );
});

export default RightSideBar;
