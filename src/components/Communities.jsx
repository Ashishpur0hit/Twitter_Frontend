import React from 'react'
import RightSideBar from './RightSideBar'
import CommunityHeader from './CommunityHeader'
import ChooseCommunity from './ChooseCommunity'
import CreatePost from './CreatePost'

function Communities() {
    return (
        <div className='w-full grid  grid-cols-2'>
            <div className='w-full col-span-1 relative'>
                <div className='w-full absolute top-0 z-10 bg-white'>
                    <CommunityHeader />
                </div>
                <div className='h-full w-full overflow-y-auto absolute z-0 pt-14'>
                    <ChooseCommunity />




                    <CreatePost PostLink="https://pbs.twimg.com/media/F-UcBhDaUAAiZOt?format=png&name=900x900" Profile="https://pbs.twimg.com/profile_images/1747237510206349312/mM2MUbQ__400x400.jpg" caption="🚨New to #Bybit? Let us help you get started with a welcome gift!

                    🎁Limited time only with up to 5,020 $USDT in rewards!

                    👇Click on Claim Now

                    #TheCryptoArk"/>

                    <CreatePost PostLink="https://pbs.twimg.com/media/F97HWHUWsAAIjag?format=jpg&name=small" Profile="https://pbs.twimg.com/profile_images/1683501992314798080/xl1POYLw_400x400.jpg" caption="Calling all #developers! 📣

                        Innovate with our real-time and historical data on the X API.

                    Get started with Pro👇"/>



                    <CreatePost PostLink="https://pbs.twimg.com/media/GIJbFRUXwAA9NYZ?format=jpg&name=small" Profile="https://pbs.twimg.com/profile_images/1737391594062635008/VR-sMeiA_400x400.jpg" caption="Is a social media application integrated with chatbox  is considered as a good level project .

                    What actually are good level of projects drop some below 👇."/>





                </div>
            </div>
            <div className='w-full col-span-1'>
                <RightSideBar />

            </div>
        </div>
    )
}

export default Communities