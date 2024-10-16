import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

export default function  () {
const [toggle,setToggle] = useState(false);

  return (
    <div className='bg-cyan-400 p-4' >
        <div className='max-w-[1240px] flex justify-between items-center '>
            <div className='text-black text-3xl pl-5 font-bold'>
                My Company
            </div>

            {
                toggle ?
                <IoCloseOutline onClick={()=> setToggle(!toggle)}  className='text-white text-3xl md:hidden block'/>
                :
                <IoIosMenu onClick={()=> setToggle(!toggle)} className='text-white text-3xl md:hidden block' />
                
            }
           
            <ul className='hidden md:flex text-white gap-5 '>
                <li>Home </li>
                <li>About</li>
                <li>Services</li>
               
                <li>Contact</li>
            </ul>
                                                                    {/* Responsive menu */}


            <ul className={` md:hidden w-[300px] h-screen text-white fixed bg-black top-[68px] ${toggle ? 'left-[0]' : 'left-[100%]'} `}>
                <li className='p-3 text-center'>Home </li>
                <li className='p-3 text-center'>About</li>
                <li className='p-3 text-center'>Services</li>
           
                <li className='p-3 text-center'>Contact</li>
            </ul>

        </div>
    </div>
  )
}
