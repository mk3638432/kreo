import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'


const Header = () => {
  return (
    <div className='h-[100vh] bg-gradient-to-r from-black to-blue-400'>
        <div className='w-[1200px] m-auto'>
            <div className='flex justify-evenly h-20 items-center text-2xl cursor-pointer  text-white'>
                <p className='text-orange-500 font-bold'>WORK</p>
                <p className='hover:text-orange-500'>ABOUT US</p>
                <p className='text-orange-500 font-bold hover:text-orange-500 text-3xl'>KREO</p>
                <p className='hover:text-orange-500'>CAREERS</p>
                <p className='hover:text-orange-500'>INSIGHTS</p>
                <BiSearchAlt2 size={30}/>
            </div>
        </div>
        <div>
            <img className='w-full h-[600px]' src='https://images.pexels.com/photos/321457/pexels-photo-321457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            <p className='text-white flex justify-center text-3xl'>WINNER OF THE MOST PRESTIGIOUS DESIGN AWARD IN THE WORLD</p>
        </div>
    </div>
  )
}

export default Header