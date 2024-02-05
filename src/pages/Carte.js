import React from 'react'
import { useSelector } from 'react-redux'
import { ImageProdact, imageprodactt } from '../assets'
import CarteItems from '../commponents/CarteItems'

export default function Carte() {

  const prodactData = useSelector((state)=> state.ZshopeeSlic.prodactData)
  console.log(prodactData)
  return (
    <div>
      <img className='w-full  h-60 object-cover' src={imageprodactt} alt='image'/>
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CarteItems/>
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div>
            <h2>cart totals</h2>
          </div>
        </div>
      </div>
    </div>
   
  )
}
