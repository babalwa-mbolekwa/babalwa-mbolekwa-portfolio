"use client"

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react';

const Footer = () => {
  return (
    <div>
        <div className='text-center'>
          <h3 className="text-gray-800 font-outfit text-4xl font-semibold">Babalwa<span className="text-5xl text-pink-600">.</span></h3>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='email' className='w-6' />
                babalwambolekwa93@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-12'>
            <p>&copy; 2021-{new Date().getFullYear()} Babalwa Mbolekwa. All Rights Reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://www.linkedin.com/in/babalwa-mbolekwa-a16a94147" target="_blank" className='underline'>LinkedIn</a></li>
                <li><a href="https://github.com/babalwa-mbolekwa" target="_blank" className='underline'>GitHub</a></li>
                <li><a href="https://x.com/_Babalwa" target="_blank" className='underline'>Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer