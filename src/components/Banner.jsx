import React from 'react'
import { ReactTyped } from "react-typed";
export default function Banner() {
  return (
    <div className='bg-cyan-400 w-full py-[100px] text-center '>

        <div className='max-w-[1240px] mx-auto mt-4'>
            <div className='font-bold text-xl '>
                Learn With Us
            </div>
            <div className='text-white font-bold text-3xl  p-5 mt-4'>Grow With Us.</div>
            <div className=' text-[40px] text-white font-bold '> Learn 
            <ReactTyped className='pl-3' strings={['Web Development!!!','App Development!!!','Digital Marketing!!!']} typeSpeed={100} loop={true}    backSpeed={50} />
                </div>
        </div>
        
    </div>
  )
}
