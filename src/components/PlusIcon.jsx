import React from 'react'

const PlusIcon = ({ active }) => {
  return (
    <svg
      className={`fill-black shrink-0 ml-8 ${active && 'fill-white'}`}
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`transform origin-center transition duration-200 ease-out ${active && "!rotate-180"
          }`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`transform origin-center rotate-90 transition duration-200 ease-out ${active && "!rotate-180"
          }`}
      />
    </svg>
  )

}

export default PlusIcon