import '../../public/Styles/review.css'
import { useState } from 'react'
import custReviews, { ReviewType } from '../helpers/customerReviews'

function Review() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  const previousReview = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + custReviews.length) % custReviews.length
    )
  }

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % custReviews.length)
  }

  const currentReview: ReviewType = custReviews[currentReviewIndex]

  return (
    <div className="reviewContainer">
      <h3>{currentReview.name}</h3>
      <div className="reviewContent">
        <button className="arrowButton prevButton" onClick={previousReview}>
          ←
        </button>
        <h6>{currentReview.review}</h6>
        <button className="arrowButton nextButton" onClick={nextReview}>
          →
        </button>
      </div>
    </div>
  )
}

export default Review
