import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ImageSlider = () => {
  const images = [
    { imgUrl: 'https://design4users.com/wp-content/uploads/2019/08/summer-illustrations-pascal-campion-art.jpg' },
    { imgUrl: 'https://i.redd.it/nalz7hyir5z01.jpg' },
    { imgUrl: 'https://drawingamerica.com/wp-content/uploads/2024/04/3487D-copy-scaled.jpeg' },
    { imgUrl: 'https://design4users.com/wp-content/uploads/2020/12/winter-illustrations-pascal-campion.jpg' },
    { imgUrl: 'https://gallerypascal.com/cdn/shop/files/4766_THESPOT_web_d94354a7-e41b-47a8-9df6-2df193708e86.jpg?v=1694030470&width=3000' },
    { imgUrl: 'https://design4users.com/wp-content/uploads/2019/08/pascal-campion-summer-illustration-3-1024x701.jpg' },
    { imgUrl: 'https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1487004959646-1C22IHQL5RMVO4BV2ODV/walking_into_fall__by_pascalcampion-daekzsc.jpg' },
  ]

  const [currentImg, setCurrnetImg] = React.useState(1)

  const ImgsMap = images.map((img, index) => {
    return (
      <div className=''>
        <img src={img.imgUrl} alt="image" className={` ${currentImg === index ? 'block' : 'hidden'}`} />
      </div>
    )
  })

  const buttonsMap = images.map((img, index) => (
    <button
      className={`w-2 h-2 rounded-full bg-white m-1 ${currentImg === index ? 'bg-opacity-100' : 'bg-opacity-50'}`}
      onClick={() => setCurrnetImg(index)}
      key={index}
    ></button>
  ))

  const handleNext = () => {
    if (currentImg === images.length - 1) {
      setCurrnetImg(0)
    } else {
      setCurrnetImg(currentImg + 1)
    }
  }

  const handlePrev = () => {
    if (currentImg === 0) {
      setCurrnetImg(images.length - 1)
    } else {
      setCurrnetImg(currentImg - 1)
    }
  }

  return (
    <div className='px-5 pt-8'>
      <h2 className='text-2xl md:text-3xl lg:text-5xl text-center'>PASCAL CAMPION</h2>
      <p className='text-center'>Art</p>
      <div className=' relative flex flex-col'>
        <div className='flex justify-center mt-5 gap-2'>
          <FontAwesomeIcon
            icon={faCircleLeft}
            className='  text-2xl md:text-3xl lg:text-4xl hover:text-opacity-50 text-black cursor-pointer active:text-black'
            onClick={handlePrev}
          />
          <FontAwesomeIcon
            icon={faCircleRight}
            className=' text-2xl md:text-3xl lg:text-4xl hover:text-opacity-50 text-black cursor-pointer active:text-black'
            onClick={handleNext}
          />
        </div>
        <div className='relative border-2 border-black max-w-[550px]  m-auto mt-5 p-2 lg:p-5'>
          {ImgsMap}
          <div className='absolute bottom-5 text-center left-1/2 -translate-x-1/2'>
            {buttonsMap}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider