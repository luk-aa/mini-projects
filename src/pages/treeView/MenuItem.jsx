import React from 'react'
import MenuList from './MenuList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = React.useState({})

  const handleToggleChildren = (id) => {
    setDisplayCurrentChildren(prev => ({ ...prev, [id]: !prev[id] }))
  }
  console.log(displayCurrentChildren)
  return (
    <li className={`ml-5 my-2`} >
      <p
        onClick={() => handleToggleChildren(item.id)}
        className={`px-3 py-1 font-semibold hover:bg-[#f6f6f9] ${item.parent ? 'cursor-pointer text-lg text-[#32324D]' : 'text-gray-500 '}`}>
        {item.name}
        {item.children
          ? <span className='ml-2 text-gray-500 '>
            {displayCurrentChildren[item.id] ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
          </span>
          : null}
      </p>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.id]
        ? <MenuList list={item.children} />
        : null}
    </li>
  )
}

export default MenuItem