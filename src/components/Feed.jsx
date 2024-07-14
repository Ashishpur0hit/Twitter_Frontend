import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CiImageOn, CiGlobe, CiLocationOn, CiCalendar, CiFaceSmile } from 'react-icons/ci';
import '@splidejs/react-splide/css'; // Import Splide CSS if you plan to use it elsewhere
import CreatePost from './CreatePost';

const Feed = React.memo(() => {
   
    return (
        <div className="" >
            
                
                    <div className='border '>
                        <div className='flex items-center mt-16'>
                            <img className='w-10 rounded-full h-10 m-2' src='chimtu.jpeg' alt="avatar" />
                            <input
                                className='border-none outline-none focus-none w-full rounded-xl h-14 p-2'
                                type="text"
                                placeholder='What is Happening ?'
                            />
                        </div>
                        <div className='flex items-center ms-10'>
                            <CiGlobe size="24px" className='m-2' />
                            <h3 className='text-blue-500 font-semibold text-xs'>Everyone can reply</h3>
                        </div>
                        <div className='flex justify-around items-center p-2 border'>
                            <div className='flex justify-around w-1/2'>
                                <CiCalendar size="24px" style={{strokeWidth: 0.25 }} />
                                <CiFaceSmile size="24px" style={{strokeWidth: 0.25 }}  />
                                <CiImageOn  size="24px" style={{strokeWidth: 0.25 }} />
                                <CiLocationOn size="24px" style={{strokeWidth: 0.25 }}  />
                                <CiGlobe size="24px"  style={{strokeWidth: 0.25 }} />
                            </div>
                            <button className="ps-5 pe-5 pt-2 pb-2 font-lg bg-blue-500 font-semibold text-white rounded-full hover:bg-blue-700">
                                Post
                            </button>
                        </div>
                    </div>
                

                <CreatePost PostLink="https://pbs.twimg.com/media/F97HWHUWsAAIjag?format=jpg&name=small" Profile="https://pbs.twimg.com/profile_images/1683501992314798080/xl1POYLw_400x400.jpg" caption="Calling all #developers! 📣

Innovate with our real-time and historical data on the X API.

Get started with Pro👇"/>



<CreatePost PostLink="https://pbs.twimg.com/media/F-UcBhDaUAAiZOt?format=png&name=900x900" Profile="https://pbs.twimg.com/profile_images/1747237510206349312/mM2MUbQ__400x400.jpg" caption="🚨New to #Bybit? Let us help you get started with a welcome gift!

🎁Limited time only with up to 5,020 $USDT in rewards!

👇Click on Claim Now

#TheCryptoArk"/>



                <CreatePost PostLink="https://pbs.twimg.com/media/GSUYIiWXcAATXug?format=jpg&name=small" Profile="https://pbs.twimg.com/profile_images/1808279382592512001/hDH4iBGg_400x400.jpg" caption="Be Honest! Should we change the name 𝕏 back to twitter A. Yes B. No"/>


                

             


          
        </div>
    );
});

export default Feed;
