import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaApple } from 'react-icons/fa';


function LogOutPage() {

    const navigate = useNavigate();


    return (
        <div className='h-screen'>
            <div className='flex p-5 h-5/6 justify-around items-center'>
                <img className='w-1/2 p-16' src="twitterLogo.png" alt="Logo" />
                <div>
                    <h1 className='font-black text-7xl'>Happening Now</h1>
                    <h1 className='font-bold text-3xl mt-10'>Join Today</h1>




                    <div onClick={() => { navigate('/home') }} className='mt-5 border-2 w-1/2 rounded-full flex justify-between cursor-pointer p-2 hover:bg-gray-200'>
                        <div className='flex '>
                            <img className='w-8 h-8 rounded-full' src="chimtu.jpeg" alt="Profile" />
                            <div className='ms-2'>
                                <p className='text-xs font-semibold text-gray-600'>LogIn As Ashish</p>
                                <p className='text-xs font-base text-gray-500'>amanpurohit183@gmail.com</p>
                            </div>

                        </div>
                        <img className='w-8 h-8 rounded-full' src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="google logo" />
                    </div>




                    <div className='mt-5 border-2 w-1/2 rounded-full cursor-pointer  flex justify-center items-center p-2 hover:bg-gray-200'>
                        <FaApple size='24px' />
                        <h1 className='text-sm font-bold ms-2'>Sign Up With Apple</h1>
                    </div>


                    <div className='mt-5 border-2 w-1/2 rounded-full cursor-pointer  bg-blue-500 flex justify-center items-center p-2 hover:bg-blue-600'>
                        <h1 className='text-sm font-bold ms-2 text-white'>Create Account</h1>
                    </div>


                    <p className='w-1/2 text-xs text-gray-500 p-2 '>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>

                    <h1 className='text-md font-bold ms-2 mt-10'>Already Have An Account ?</h1>

                    <div className='mt-5 border-2 border-blue-500 w-1/2 rounded-full cursor-pointer  flex justify-center items-center p-2 hover:bg-gray-200'>
                        <h1 className='text-sm font-bold ms-2 text-blue-400'>Create Account</h1>
                    </div>






                </div>
            </div>




            <div className='w-full flex justify-around mt-10'>
            <p className='text-xs font-base text-gray-500'>About Us</p>
            <p className='text-xs font-base text-gray-500'>Help</p>
            <p className='text-xs font-base text-gray-500'>Constact Us</p>
            <p className='text-xs font-base text-gray-500'>Privacy</p>
            <p className='text-xs font-base text-gray-500'>Cookies</p>
            <p className='text-xs font-base text-gray-500'>Blog</p>
            <p className='text-xs font-base text-gray-500'>Careers</p>
            <p className='text-xs font-base text-gray-500'>Help</p>
            <p className='text-xs font-base text-gray-500'>Constact Us</p>
            <p className='text-xs font-base text-gray-500'>Privacy</p>
            <p className='text-xs font-base text-gray-500'>Cookies</p>
            <p className='text-xs font-base text-gray-500'>Blog</p>
            <p className='text-xs font-base text-gray-500'>Careers</p>
            </div>



        </div>
    )
}

export default LogOutPage