import React from 'react'

export default function Expert() {
  return (
    <div className='max-w-[1240px] mx-auto p-4 md:grid grid-cols-2 pt-4'>
                <div className=' col-span-1 '> 
                <img src='/images/Soft skills-amico.png'></img>
                </div>
                <div className='col-span-1 flex flex-col justify-center md:ml-[80px]'>
                <h1 className='text-green-500 font-bold'>LEARN WITH EXPERT</h1>
                <p className='pt-6 text-justify md:pl-[0px]'>I had an amazing internship experience at Alliedge Technologies. The team is highly skilled, supportive, and encourages continuous learning. I got the chance to work on real projects, which helped me grow both technically and professionally. </p>
                <button className='w-[30%] bg-black text-white p-3 rounded mt-5'>Get Start</button>
               
                </div>

    </div>
  )
}
