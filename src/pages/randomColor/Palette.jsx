import React from 'react'
import RandomColorGgenerator from './RandomColorGgenerator'
const Palette = () => {

  return (
    <div className='my-10'>
      <h1 className='text-3xl lg:text-5xl text-center'>RANDOM COLORS</h1>
      <p className='text-center mb-10'>Click on box to change color</p>
      <div className='lg:w-[1000px] lg:h-[400px] m-auto grid  md:grid-cols-2 lg:grid-cols-3  gap-5 px-10 md:px-16 lg:px-20'>
        <RandomColorGgenerator />
        <RandomColorGgenerator />
        <RandomColorGgenerator />
        <RandomColorGgenerator />
        <RandomColorGgenerator />
        <RandomColorGgenerator />
      </div>
    </div>
  )
}

export default Palette