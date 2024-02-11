import React from 'react'
import {  iconHeder, iconLogin, logoDark, } from '../assets'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {

    const prodactData = useSelector((state)=> state.ZshopeeSlic.prodactData)
    const userInfo = useSelector((state)=> state.ZshopeeSlic.userInfo)
    console.log(userInfo)
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-gray-800 font-bodyFont sticky top-0 z-50">
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
       <Link to={'/'}>
       <div>
          <img src={logoDark} width={150} alt=''/>
        </div>
       </Link>
        <div className='flex items-center gap-4'>
          <ul className='flex items-center gap-8'>
          <Link to={'/'}>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Home</li>
            </Link>
            <Link to="/Cart">
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>ShoppingCart</li>
            </Link>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Shop</li>
            <Link to="/ContactUs">
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Contact</li>
            </Link>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Blog</li>
          </ul>
          <Link to="/Cart">
          <div className='relative'> 
            <img src={iconHeder} className='w-12' alt=''/>
            <span className='absolute w6 top-4 left-5 text-sm flex items-center justify-center font-semibold font-TitelFont'>{prodactData.length}</span>
          </div>
          </Link>
          <Link to={"/Login"}>
          <img className='w-9 rounded-full' alt='user logo' src={userInfo ? userInfo.image : iconLogin }/>
          </Link>
          {
            userInfo && <p>{userInfo.name}</p>
          }
        </div>

      </div>
    </div>
  )
}
