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
      <div className="revTitle">
        <h3>Customer Reviews</h3>
      </div>
      <div className="reviewContent">
        <button className="arrowButton prevButton" onClick={previousReview}>
          ←
        </button>
        <div className="custRev">
          <h6>{currentReview.review}</h6>
          <h4>{currentReview.name}</h4>
        </div>
        <button className="arrowButton nextButton" onClick={nextReview}>
          →
        </button>
      </div>
    </div>
  )
}

export default Review
