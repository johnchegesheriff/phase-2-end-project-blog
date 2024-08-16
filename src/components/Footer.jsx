import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


const Footer = () => {
  return (
    <div className='bg-gray-800'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md":max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div>
                <div><p className='font-medium tracking-wide text-gray-200'>Category</p>
                <ul className='mt-2 space-y-2'>
                    <li className='text-gray-500'>News</li>
                    <li className='text-gray-500'>World</li>
                    <li className='text-gray-500'>Games</li>
                    <li className='text-gray-500'>Reference</li>
                </ul>
                </div>

                <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                <p>Copyright 2024 | All rights reserved</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                    <a href="" className='text-gray-500 transition-all duration-150 hover:text-blue-500'><FaXTwitter className='h-6 w-6'/></a>
                    <a href="" className='text-gray-500 transition-all duration-150 hover:text-blue-500'><FaInstagram className='h-6 w-6'/></a>
                    <a href="" className='text-gray-500 transition-all duration-150 hover:text-blue-500'><FaFacebook className='h-6 w-6'/></a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer