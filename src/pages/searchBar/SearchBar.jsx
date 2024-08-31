import React from 'react'
import SearchResults from './SearchResults'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {

  const [input, setInput] = React.useState('')
  const [users, setUsers] = React.useState([])
  const fetchData = (value) => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          const results = data.filter(item => {
            return value &&
              item && item.name && item.name.toLowerCase().includes(value.toLowerCase())
          })
          console.log(results)
          setUsers(results)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className='mt-20 flex flex-col items-center'>
      <h2 className='text-5xl'>SEARCH</h2>
      <p>For users</p>
      <div className='my-5'>
        <div className='flex items-center border-2 rounded-md border-black p-2'>
          <input
            className=' outline-none'
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className='' />
        </div>
        <SearchResults
          users={users}
          setUsers={setUsers}
          setInput={setInput}
        />
      </div>
    </div>
  )
}

export default SearchBar