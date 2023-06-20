'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animation from '../gif/animation.json'
import animation1 from '../gif/animation1.json'
import animation2 from '../gif/animation2.json'


const Integrated = () => {
  return (
  <div className='w-[1200px] mt-20  m-auto'> 
    <p className='text-4xl font-bold m-4'>360° INTEGRATED BRAND EXPERIENCE DESIGN</p>
    <div className='grid md:grid-cols-3  gap-8'> 
    
    <div> 
         <div className='relative  group  shadow-xl shadow-gray-400 rounded-xl p-4 '>
       <img className='rounded-xl group-hover:opacity-5' src='https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <Lottie className='w-[350px] h-[300px]' animationData={animation} />    
       </div>
         </div>

         <div className='mt-10'>
           <p className='font-bold'>Something's Brewing</p>
           <p>360° INTEGRATED BRAND EXPERIENCE DESIGN</p>
         </div>
         </div>

         <div>  
         <div className='relative  group  shadow-xl shadow-gray-400 rounded-xl p-4 '>
       <img className='rounded-xl group-hover:opacity-5' src='https://images.pexels.com/photos/16230774/pexels-photo-16230774/free-photo-of-wood-city-streets-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
       <Lottie className='w-[350px] h-[300px]' animationData={animation1} />    

       </div>
         </div>

         <div className='mt-10'>
           <p className='font-bold'>Sterling Holidays - Branding Experience</p>
           <p>360° INTEGRATED BRAND EXPERIENCE DESIGN</p>
         </div>
         </div>

         <div>  
         <div className='relative  group  shadow-xl shadow-gray-400 rounded-xl p-4'>
       <img className='rounded-xl group-hover:opacity-5' src='https://images.pexels.com/photos/16105808/pexels-photo-16105808/free-photo-of-sea-streets-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
       <Lottie className='w-[350px] h-[300px]' animationData={animation2} />    
        
       </div>
         </div>

         <div className='mt-10'>
           <p className='font-bold'>House of Toys</p>
           <p>360° INTEGRATED BRAND EXPERIENCE DESIGN</p>
         </div>
         </div>


    </div>
    
    </div>
  )
}

export default Integrated