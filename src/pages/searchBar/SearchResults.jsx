import React from 'react'

const SearchResults = ({ users, setUsers, setInput }) => {
  const handleClick = (name) => {
    setInput(name)
    setUsers([])
  }
  console.log(users)
  return (
    <div className={`flex flex-col gap-2 rounded-md  bg-black text-white py-2 w-full mt-2 ${users.length === 0 ? 'hidden' : ''} `}>
      {
        users.length > 0 && users.map(user => <p className='cursor-pointer hover:bg-slate-700    px-4 py-2' onClick={() => handleClick(user.name)} key={user.id}>{user.name}</p>)
      }
    </div>
  )
}

export default SearchResults