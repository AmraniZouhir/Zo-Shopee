import React, { useEffect, useState } from 'react'
import Banner from '../commponents/Banner'
import Product from '../commponents/Product'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
  const [products ,setProdates] = useState([])
  const data = useLoaderData();
  useEffect(()=>{
    setProdates(data.data);
  },[data])
  return (
    <>
      <Banner/> 
      <Product products={products}/>   
    </>
  )
}
