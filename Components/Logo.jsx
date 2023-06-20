'use client'
import Link from 'next/link'
import React from 'react'
import Lottie from 'lottie-react'
import animation3 from '../gif/animation3'
import laptop from '../gif/laptop'
import animation4 from '../gif/animation4'

const Logo = () => {
  return (
    <div className='w-[1200px]  mt-20  m-auto'>
        <p className='text-4xl font-bold m-4'>LOGO DESIGN & BRAND MANUAL</p>
        <div  className='grid md:grid-cols-3  gap-8'>
         
          
    <div>  
         <div className='relative  group  shadow-xl shadow-gray-400 rounded-xl p-4'>
       <img className='rounded-xl group-hover:opacity-5' src='https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <Lottie animationData={animation3}/>
       </div>
         </div>

         <div className='mt-10'>
           <p className='font-bold'>Babel-Branding Identify</p>
           <p>Logo Design & Brand Manual</p>
         </div>
         </div>



         <div>  
         <div className='relative  group  shadow-xl shadow-gray-400 rounded-xl p-4 '>
       <img className='rounded-xl group-hover:opacity-5' src='https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
       <Lottie animationData={laptop}/>
       
       </div>
         </div>

         <div className='mt-10'>
           <p className='font-bold'>Sakkath Millet</p>
           <p>Logo Design & Brand Manual</p>
         </div>
         </div>



         <div>  
         <div className='relative  group  shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
       <img className='rounded-xl group-hover:opacity-5' src='https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
       <Lottie animationData={animation4}/>
       
       </div>
         </div>

         <div className='mt-10'>
           <p className='font-bold'>Fresh Chrun-End-to-End Branding</p>
           <p>Logo Design & Brand Manual</p>
         </div>
         </div>


        </div>
    </div>
  )
}

export default Logo