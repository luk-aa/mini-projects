import React from 'react'
import MenuItem from './MenuItem'


const MenuList = ({ list }) => {
  const listMap = list.map(listItem => <MenuItem item={listItem} />)
  return (
    <ul >
      {list && list.length ? listMap : null}
    </ul>
  )
}

export default MenuList