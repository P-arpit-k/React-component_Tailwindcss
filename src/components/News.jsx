import React from 'react'

export default function News() {
  return (
    <div className='w-full mx-auto bg-cyan-400 p-4'>
       <div className='max-w-[1240px] mx-auto md:flex  justify-between mb-5'>
        <div className='pt-4 justify-center'>
            <h1 className='text-white text-3xl font-bold  md:pt-[45px]'> Want to Learn Latest I.T Skills?</h1>
            <p className='text-white pt-2'> Sign Up to our newsletters and stay up to date  .</p>
        </div>
        <div className='mt-4 justify-center'>
          <input type='text' className=' p-3 text-slate-600 justify-center ' placeholder='Email'></input>
          <button className=' bg-black text-white ml-1 p-3 rounded mt-5'>Get Start</button>
          <br/><p className='text-white pt-4 '>We Care bout the proction of your data.Read Our <br/> <a href='' className='text-black'>Privacy Policy</a></p>
               
        </div>

       </div>
    </div>
  )
}
