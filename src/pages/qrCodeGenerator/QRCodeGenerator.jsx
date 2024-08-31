import React from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = React.useState('portfolio-lukas-projects-17da86f5.vercel.app')
  const [input, setInput] = React.useState('')

  const handleGenerateQrCode = () => {
    setQrCode(input)
    setInput('')
  }

  return (
    <div className=' flex flex-col items-center h-full justify-center'>
      <h2 className='text-5xl'>QRCode Generator</h2>
      <div className='my-5 bg-black max-w-[300px]'>
        <input
          className={`w-[200px] outline-none border-2 border-black border-r-0 p-2 ${input === '' ? 'border-gray-400' : ''}`}
          type="text"
          name='qr-code'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleGenerateQrCode}
          disabled={input === ''}
          className={`${input === '' ? 'bg-gray-400' : 'bg-black'} text-white h-full w-[100px] px-2 font-semibold`}
        >Generate</button>
      </div>
      <div className='max-w-[300px]'>
        <QRCode value={qrCode} size={300} />
        <p className='text-sm'>{qrCode}</p>
      </div>
    </div>
  )
}

export default QRCodeGenerator