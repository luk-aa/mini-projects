import React from 'react'
import PlusIcon from '../../components/PlusIcon'

const Accordion = ({ title, answer }) => {
  const [active, setActive] = React.useState(false)
  return (
    <div
      className="bg-white"
      onClick={() => setActive(prev => !prev)}
    >
      <div className={` font-medium flex px-6 py-4 cursor-pointer
      justify-between items-center border-2 ${active ? 'bg-black border-black' : ''} hover:border-black duration-300`}>
        <span className={`${active ? 'text-white' : ''}`}>{title}</span>
        <PlusIcon active={active ? true : false} />
      </div>
      <p className={` px-2 max-h-0 overflow-hidden bg-[#e9e9e9] duration-200 ${active ? 'max-h-[400px] py-2' : ''}`}>
        {answer}
      </p>
    </div>
  )
}

export default Accordion