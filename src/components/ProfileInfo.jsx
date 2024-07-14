import React from 'react'

const ProfileInfo = React.memo(() => {
    return (
            <div className='w-full relative h-80'>
                <div className='absolute w-full h-64 bg-gray-300 z-0'></div>
                <div className='absolute w-full  p-2 z-10 h-80  flex items-end'>
                    <div className='w-full flex justify-between  '>
                        <img className='w-40 h-40 rounded-full p-2 bg-white ' src="https://pbs.twimg.com/profile_images/1737391594062635008/VR-sMeiA_400x400.jpg" alt="Profile" />
                        <div className='items-bottom h-100vh flex items-end '>
                            <button className='bg-white border   ps-5 pe-5 pt-2 pb-2 font-semibold hover:bg-gray-200 rounded-full'>Edit profile</button>
                        </div>
                    </div>
                </div>


           
        </div>
    )
})

export default ProfileInfo