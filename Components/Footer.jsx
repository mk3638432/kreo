import React from 'react'
import {AiFillFacebook , AiOutlineWhatsApp ,AiFillTwitterCircle , AiOutlinePhone, AiFillYoutube , AiFillLinkedin} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='h-[70vh] bg-gray-800'>
      <div className='text-white grid grid-cols-3 place-items-center'>
         <div>
          <p className='text-4xl font-bold'>KREO</p>
          <p className='my-10'>© KREO Design and Innovation 2023. <br></br>
All rights reserved.</p>
   <p>#3490, 14th main, 2nd cross, HAL 2nd <br></br> Stage, Indiranagar, Bengaluru - 560038.</p>
         </div>


         <div className='mt-[100px]'>
         <p className='text-4xl font-bold'>FOLLOW US</p>   
         <div className='flex my-10 gap-10'>
         <AiFillFacebook size={30}/>
         <AiOutlineWhatsApp size={30}/>
         <AiFillLinkedin size={30}/>
         <AiFillTwitterCircle size={30}/>
         <AiFillYoutube size={30}/>
          </div> 
          <p className='text-4xl font-bold my-10'>FOR BUSINESS ENQUIRY</p>     
         <div className='flex gap-10 my-2'>
          <AiOutlinePhone size={30}/>
          <p>+91 7259 037 156</p>
         </div>

         <div className='flex gap-10  my-2'>
          <AiOutlinePhone size={30}/>
          <p>+91 9845 202 295</p>
         </div>

         <div className='flex gap-10  my-2'>
          <BsMessenger size={30}/>
          <p>info@kreo.in</p>
         </div>

         </div>


         <div className='mt-[100px]'>
          <p className='font-bold text-4xl'>QUICK LINKS</p>
          <div>
            <div className='flex justify-between my-4'>
            <p>WORK</p>
            <p>CAREERS</p>
            </div>
            <div className='flex justify-between'> 
            <p>ABOUT US</p>
            <p>INSIGHT</p>
            </div>
          </div>
 
  <div className='mt-20'>
    <p className='font-bold text-4xl'>FOR CAREERS</p>
    
  <div className='flex m-4 gap-10'>
    <AiOutlinePhone/>
    <p>+91 9999 097 058</p>
  </div>
  <div className='flex m-4 gap-10'>
    <BsMessenger/>
    <p>careers@kreo.in</p>
  </div>
  </div>

         </div>
      </div>
    </div>
  )
}

export default Footer