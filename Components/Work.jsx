import React from 'react'
import Integrated from './Integrated'
import Logo from './Logo'

const Work = () => {
  return (
    <div className='h-[240vh] mt-20'>
        <div className='w-[1200px] m-auto flex justify-between'>
            <div className='text-5xl font-bold'>OUR WORK</div>
            <div className='ml-20 text-xl'>
            We bring a broad spectrum of integrated brand design solutions to the table.
             At KREO Design, <br></br> we offer a full range of design services,
             including graphics and identity, strategy <br></br> and positioning, products and packaging, 
             exhibitions and installations, websites and <br></br> digital experiences,
              advertising and communications, store design and retail experience, <br></br> and video and animation.
               As a full-service brand experience
             design firm, we offer this full <br></br> spectrum of expertise through our in-house multi-disciplinary teams.
            <button className='border rounded-xl p-4 mt-10 px-20 hover:bg-orange-500 hover:text-white  border-orange-400'>DOWNLOAD KREO BROCHURE</button>
            </div>
        </div>
            <Integrated/>
            <Logo/>
    </div>
  )
}

export default Work