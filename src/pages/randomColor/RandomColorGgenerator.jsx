import React from 'react'

const RandomColorGgenerator = () => {
  const [color, setColor] = React.useState('#ffffff ')
  const colorGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F']
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    setColor(hexColor)
  }

  const preventClick = (e) => {
    e.stopPropagation()
  }
  React.useEffect(() => {
    colorGenerator()
  }, [])
  return (
    <div className='h-32 lg:h-full border-2 hover:border-black duration-300'>
      <div
        className=' h-full flex justify-start items-end p-2 text-black font-bold cursor-pointer'
        onClick={colorGenerator}
        style={{ backgroundColor: color }}
      >
        <h3 onClick={preventClick}>{color}</h3>
      </div>
    </div>
  )
}

export default RandomColorGgenerator