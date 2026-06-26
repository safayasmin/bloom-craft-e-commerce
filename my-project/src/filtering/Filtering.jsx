import React from 'react'
import Hero from './Hero'
import Pricefiltering from './Pricefiltering'


const Filtering = () => {
  return (
    <div className='flex justify-between pr-25'>
        <div>
           <Hero />
        </div>
        
        <div>
        <Pricefiltering />
        </div>
      
    </div>
  )
}

export default Filtering
