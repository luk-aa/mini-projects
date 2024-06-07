import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons/faStarAndCrescent'
// import Confetti from 'confetti'
import ReactConfetti from 'react-confetti'

const StarRating = () => {
  const [selectedStar, setSelectedStar] = React.useState(0)
  const [hoverStar, setHoverStar] = React.useState(0)

  const stars = [1, 2, 3, 4, 5]

  const starsMap = stars.map(star => (
    <span
      key={star}
      onClick={() => setSelectedStar(star)}
      onMouseMove={() => setHoverStar(star)}
      onMouseLeave={() => setHoverStar(selectedStar)}
    >
      <FontAwesomeIcon
        icon={faStar}
        className={`w-20 h-20 ${star <= selectedStar ? 'text-yellow-500' : ''}
      ${star <= hoverStar ? 'text-yellow-500' : ''}`} />
    </span>
  ))
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      {selectedStar === 5 && <ReactConfetti />}
      <h2 className='text-5xl'>STAR RATING</h2>
      <p>Rate this projects</p>
      <div className='my-5'>
        {starsMap}
      </ div>
      <h3>{selectedStar}</h3>
    </div>
  )
}

export default StarRating