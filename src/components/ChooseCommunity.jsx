import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; 

function ChooseCommunity() {
  return (
    <div className='w-full p-5'>
        <Splide  options={{
  gap: '1rem',
  arrows: false,
  pagination: false,
  autoWidth: true,
 


      }}>
            <SplideSlide><button className='bg-white border   ps-5 pe-5 pt-1 pb-1 font-semibold hover:bg-blue-200 rounded-full ms-2'>Sports</button></SplideSlide>
            <SplideSlide><button className='bg-white border   ps-5 pe-5 pt-1 pb-1 font-semibold hover:bg-blue-200 rounded-full ms-2'>Art</button></SplideSlide>
            <SplideSlide><button className='bg-white border   ps-5 pe-5 pt-1 pb-1 font-semibold hover:bg-blue-200 rounded-full ms-2'>Gaming</button></SplideSlide>
            <SplideSlide><button className='bg-white border   ps-5 pe-5 pt-1 pb-1 font-semibold hover:bg-blue-200 rounded-full ms-2'>Entertaintment</button></SplideSlide>
            <SplideSlide><button className='bg-white border   ps-5 pe-5 pt-1 pb-1 font-semibold hover:bg-blue-200 rounded-full ms-2'>Politics</button></SplideSlide>
            <SplideSlide><button className='bg-white border   ps-5 pe-5 pt-1 pb-1 font-semibold hover:bg-blue-200 rounded-full ms-2'>Culture</button></SplideSlide>
            <SplideSlide><button className='bg-white border   ps-5 pe-5 pt-1 pb-1 font-semibold hover:bg-blue-200 rounded-full ms-2'>Science</button></SplideSlide>
            <SplideSlide><button className='bg-white border   ps-5 pe-5 pt-1 pb-1 font-semibold hover:bg-blue-200 rounded-full ms-2'>Food</button></SplideSlide>
            
    </Splide>
    </div>
  )
}

export default ChooseCommunity