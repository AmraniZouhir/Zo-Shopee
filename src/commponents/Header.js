import React from 'react'
import {  iconHeder, logoDark, } from '../assets'

export default function Header() {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-gray-800 font-bodyFont">
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <div>
          <img src={logoDark} width={150} alt=''/>
        </div>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Home</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Pages</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Shop</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Element</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Blog</li>
          </ul>
          <div className='relative'> 
            <img src={iconHeder} className='w-12' alt=''/>
            <span className='absolute w6 top-4 left-5 text-sm flex items-center justify-center font-semibold font-TitelFont'>0</span>
          </div>
          <img className='w-9 rounded-full' src='https://previews.123rf.com/images/faysalfarhan/faysalfarhan1602/faysalfarhan160200290/52258617-ecommerce-icon-black-glossy-round-button.jpg'/>
        </div>

      </div>
    </div>
  )
}