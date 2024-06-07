import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHouse, faPalette, faStar } from '@fortawesome/free-solid-svg-icons'



const Header = ({ menuOpened, setMenuOpened }) => {

  const activeStyles = {
    backgroundColor: 'white',
    color: '#9E9E9E',
    boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)'
  }

  return (
    <div
      className={`bg-[#74a693]  pl-0 fixed lg:static top-0 bottom-0
      text-white ${!menuOpened ? 'w-10 lg:min-w-20' : 'min-w-60'} duration-200 z-50`}
      onClick={() => setMenuOpened(true)}
    >
      <h1 className=' text-center lg:text-start my-6 lg:ml-6 text-2xl font-bold'>{menuOpened ? 'PROJECTS' : 'P'}</h1>
      {/* <hr className='mx-6 my-5' /> */}
      <nav className={`flex flex-col gap-2 ${!menuOpened ? 'pr-1 lg:pr-5' : 'pr-5 lg:pr-10'} duration-200`}>
        <NavLink
          to='/'
          className=' w-full items-center h-10 pl-2 lg:pl-6  flex gap-2 text-white rounded-r-full'
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          <FontAwesomeIcon icon={faHouse} />
          <p className={`${!menuOpened ? 'hidden' : ''}`}>Home</p>
        </NavLink>
        <NavLink
          to='accordion'
          className=' w-full items-center h-10 pl-2 lg:pl-6  flex gap-2 text-white rounded-r-full'
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          <FontAwesomeIcon icon={faChevronDown} />
          <p className={`${!menuOpened ? 'hidden' : ''}`}>Accordion</p>
        </NavLink>
        <NavLink
          to='palette'
          className=' w-full items-center h-10 pl-2 lg:pl-6  flex gap-2 text-white rounded-r-full'
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          <FontAwesomeIcon icon={faPalette} />
          <p className={`${!menuOpened ? 'hidden' : ''}`}>Palette</p>
        </NavLink>
        <NavLink
          to='star-rating'
          className=' w-full items-center h-10 pl-2 lg:pl-6  flex gap-2 text-white rounded-r-full'
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          <FontAwesomeIcon icon={faStar} />
          <p className={`${!menuOpened ? 'hidden' : ''}`}>Rating</p>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header