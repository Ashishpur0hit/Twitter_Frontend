import React from 'react'
import { CiCircleMore , CiHeart , CiBookmark , CiShare1 , CiSaveDown1 , CiSaveUp1 } from 'react-icons/ci'

const CreatePost = React.memo(({PostLink , Profile , caption}) => {
    return (
        <div className='p-5 hover:bg-gray-100'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className='rounded-full h-12 w-12 m-2' src={Profile} alt="Elon" />
                    <h3 className='font-semibold'>Elon Musk</h3>
                    <h4 className='font-base text-sm ms-2 text-gray-500'>@ElonMNews</h4>
                    <p className='text-xs ms-2  text-blue-500'>11hrs</p>
                </div>

                <CiCircleMore size='24px' className='w-16' />
            </div>

            <div>
                {caption}
            </div>
            <div className='p-5'>
                <img className='rounded-xl' src={PostLink} alt="" />
            </div>

            <div className='grid grid-cols-5 ps-10 pe-10'>
                <div className='flex items-center col-span-1'>
                    <CiHeart size={'24px'}/>
                    <p className='text-sm ms-2  text-gray-700 font-semibold'>3.3k</p>
                </div>
                
                <div className='flex items-center col-span-1'>
                    <CiBookmark size={'24px'}/>
                    <p className='text-sm ms-2  text-gray-700 font-semibold'>3.3k</p>
                </div>

                <div className='flex items-center col-span-1'>
                    <CiSaveDown1 size={'24px'}/>
                    <p className='text-sm ms-2  text-gray-700 font-semibold'>3.3k</p>
                </div>

                <div className='flex items-center col-span-1'>
                    <CiBookmark size={'24px'}/>
                    <p className='text-sm ms-2  text-gray-700 font-semibold'>3.3k</p>
                </div>

                <div className='flex items-center col-span-1'>
                    <CiSaveUp1 size={'24px'}/>
                    <p className='text-sm ms-2  text-gray-700 font-semibold'>3.3k</p>
                </div>
            </div>



        </div>
    )
})

export default CreatePost