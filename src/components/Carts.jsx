import React from 'react'

export default function Carts() {
  return (
    <div className='py-[100px] px-2 text-center'>

        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-11 '>
          <div className=' shadow-xl h-[400px] my-2 pt-[50px] bg-gray-100 hover:scale-105 duration-500 rounded-xl'>
            <p className='text-black font-bold text-2xl'>Web Development</p>
            <p className='pt-[30px] text-2xl text-green-500'>$149</p>
            <p className='pt-[30px] px-2'>Web development involves creating and maintaining websites, focusing on aspects like design, layout, user experience, and functionality.</p>
            <button className='w-[30%] bg-green-600 text-white p-3 rounded mt-5 '>Get Start</button>
            
          </div>
          <div className=' shadow-xl h-[400px] my-2 pt-[50px] bg-gray-200 hover:scale-105 duration-500 rounded-xl'>
          <p className='text-black font-bold text-2xl'>Digital Marketing</p>
          <p className='pt-[30px] text-2xl text-green-500'>$149</p>
            <p className='pt-[30px] px-2'>Digital marketing refers to the promotion of products, services, or brands through digital channels like search engines, social media, email, and websites.</p>
            <button className='w-[30%] bg-black text-white p-3 rounded mt-5'>Get Start</button>
          </div>
          <div className=' shadow-xl h-[400px] my-2 pt-[50px] bg-gray-100 hover:scale-105 duration-500 rounded-xl'>
          <p className='text-black font-bold text-2xl'>App Development</p>
          <p className='pt-[30px] text-2xl text-green-500'>$149</p>
            <p  className='pt-[30px] px-2'>App development involves designing, building & maintaining software applications for various platforms, including mobile devices, desktops.</p>
            <button className='w-[30%] bg-green-600 text-white p-3 rounded mt-5'>Get Start</button>
          </div>

        </div>

    </div>
  )
}
