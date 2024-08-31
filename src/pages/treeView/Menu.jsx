import React from 'react'
import data from './data'
import MenuList from './MenuList'


const Menu = () => {
  return (
    <div className='mt-10 flex flex-col gap-10 items-center'>
      <h2 className='text-5xl'>Tree View</h2>
      <MenuList list={data} />
    </div>
  )
}

export default Menu