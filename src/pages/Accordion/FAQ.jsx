import React from 'react'
import Accordion from './Accordion1'
import PlusIcon from '../../components/PlusIcon'


const FAQ = () => {
  const [selected, setSelected] = React.useState('1')

  const showAnswer = (a) => {
    if (selected === a) {
      setSelected(null)
    } else {
      setSelected(a)
    }
  }

  return (
    <div className="my-10 mx-10">
      <h3 className="text-2xl font-semibold my-3">Frequently Asked Questions</h3>
      <div className='lg:grid grid-cols-2 gap-5'>
        <div className="mt-8 flex flex-col gap-2 lg:mt-5">
          <h3 className='font-semibold m-2'>Accordion type 1</h3>
          <Accordion
            title='1. What is the purpose of this e-commerce web app?'
            answer='"This e-commerce web app is designed to facilitate 
          online buying and selling of goods or services"'
          />
          <Accordion
            title="2. How secure is my personal information on this platform?"
            answer='"We take the security and privacy of our users very seriously. 
          Our platform employs robust encryption techniques to protect your 
          personal information, and we adhere to strict privacy policies to 
          safeguard your data."'
          />
          <Accordion
            title="3. What payment methods are accepted on the platform?"
            answer='"We accept various payment methods, including credit/debit cards, 
          digital wallets, and in some cases, cash on delivery (COD). 
          The specific payment options available may vary depending on your location."'
          />
        </div>

        <div className="mt-8 flex flex-col gap-2 lg:mt-5">
          <h3 className='font-semibold m-2'>Accordion type 2</h3>
          <div>
            <div
              className={`cursor-pointer flex justify-between items-center px-6 py-4 font-semibold 
              ${selected === 1 ? 'bg-black border-black text-white' : ''} 
              border-2 hover:border-black duration-200`}
              onClick={() => showAnswer(1)}
            >
              <h2>1. What is the purpose of this e-commerce web app?</h2>
              <PlusIcon active={selected === 1 ? true : false} />
            </div>
            <p
              className={` px-2 max-h-0 overflow-hidden bg-[#e9e9e9] duration-200 ${selected === 1 ? 'max-h-[400px] py-2' : ''}`}
            >"This e-commerce web app is designed to facilitate
              online buying and selling of goods or services"</p>
          </div>
          <div>
            <div
              className={`cursor-pointer flex justify-between items-center px-6 py-4 font-semibold 
              ${selected === 2 ? 'bg-black border-black text-white' : ''} 
              border-2 hover:border-black duration-200`}
              onClick={() => showAnswer(2)}
            >
              <h2>2. How secure is my personal information on this platform?</h2>
              <PlusIcon active={selected === 2 ? true : false} />
            </div>
            <p
              className={` px-2 max-h-0 overflow-hidden bg-[#e9e9e9] duration-200 ${selected === 2 ? 'max-h-[400px] py-2' : ''}`}
            >"We take the security and privacy of our users very seriously.
              Our platform employs robust encryption techniques to protect your
              personal information, and we adhere to strict privacy policies to
              safeguard your data."</p>
          </div>
          <div>
            <div
              className={`cursor-pointer flex justify-between items-center px-6 py-4 font-semibold 
              ${selected === 3 ? 'bg-black border-black text-white' : ''} 
              border-2 hover:border-black duration-200`}
              onClick={() => showAnswer(3)}
            >
              <h2>3. What payment methods are accepted on the platform?</h2>
              <PlusIcon active={selected === 3 ? true : false} />
            </div>
            <p
              className={` px-2 max-h-0 overflow-hidden bg-[#e9e9e9] duration-200 ${selected === 3 ? 'max-h-[400px] py-2' : ''}`}
            >"We accept various payment methods, including credit/debit cards,
              digital wallets, and in some cases, cash on delivery (COD)."</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ