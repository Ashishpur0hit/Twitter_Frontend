import React from 'react'
import { CiCircleMore } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';

function Trending() {
  return (
    <div className='mt-16 border rounded-xl'>
          <h1 className='text-lg font-bold m-2'>What's Happening</h1>
          <div className='flex ps-2 pb-2 pt-2 hover:bg-gray-200'>
            <img className='rounded-xl w-18 h-18' src="https://pbs.twimg.com/semantic_core_img/1807906778169909248/PYi_uIQO?format=jpg&name=240x240" alt="tennis Court" />
            <div className='ms-2'>
              <h2 className='font-semibold'>Wimbledon 2024</h2>
              <p className='text-sm text-gray-500'>Tennis .LIVE</p>
            </div>
          </div>

          <div className='p-2 hover:bg-gray-200'>
            <div className='flex justify-between ps-5 pe-5'>
              <p className='text-xs text-gray-500'>Entertainment.Trending</p>
              <CiCircleMore />
            </div>
            <h2 className='font-bold ps-5 m-1'>#ShahsRukhKhan</h2>
            <p className='text-xs text-gray-500 ps-5'>215k Posts</p>
          </div>

          <div className='p-2 hover:bg-gray-200'>
            <div className='flex justify-between ps-5 pe-5'>
              <p className='text-xs text-gray-500'>Trending In India</p>
              <CiCircleMore />
            </div>
            <h2 className='font-bold ps-5 m-1'>#Pakistan</h2>
            <p className='text-xs text-gray-500 ps-5'>201k Posts</p>
          </div>

          <div className='p-2 hover:bg-gray-200'>
            <div className='flex justify-between ps-5 pe-5'>
              <p className='text-xs text-gray-500'>Entertainment.Trending</p>
              <CiCircleMore />
            </div>
            <h2 className='font-bold ps-5 m-1'>#AnantWedsRadhika</h2>
            <p className='text-xs text-gray-500 ps-5'>215k Posts</p>
          </div>



          <div className='p-2 hover:bg-gray-200'>
            <div className='flex justify-between ps-5 pe-5'>
              <p className='text-xs text-gray-500'>Entertainment.Trending</p>
              <CiCircleMore />
            </div>
            <h2 className='font-bold ps-5 m-1'>#ShahsRukhKhan</h2>
            <p className='text-xs text-gray-500 ps-5'>215k Posts</p>
          </div>

          <div className='p-2 hover:bg-gray-200'>
            <div className='flex justify-between ps-5 pe-5'>
              <p className='text-xs text-gray-500'>Trending In India</p>
              <CiCircleMore />
            </div>
            <h2 className='font-bold ps-5 m-1'>#Pakistan</h2>
            <p className='text-xs text-gray-500 ps-5'>201k Posts</p>
          </div>

          <div className='p-2 hover:bg-gray-200'>
            <div className='flex justify-between ps-5 pe-5'>
              <p className='text-xs text-gray-500'>Entertainment.Trending</p>
              <CiCircleMore />
            </div>
            <h2 className='font-bold ps-5 m-1'>#AnantWedsRadhika</h2>
            <p className='text-xs text-gray-500 ps-5'>215k Posts</p>
          </div>
        </div>

  )
}

export default Trending