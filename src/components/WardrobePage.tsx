import React, { useState, useEffect } from 'react'
import '../../public/Styles/kitchenPage.css'
import Header from './Header'

const kitchenImages = [
  '../Images/Wardrobe/1Wardrobe.webp',
  '../Images/Wardrobe/2Wardrobe.webp',
]

function WardrobePage() {
  const [currentKitchenImageIndex, setCurrentKitchenImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKitchenImageIndex(
        (prevIndex) => (prevIndex + 1) % kitchenImages.length
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval) // Clear the interval on component unmount
  }, [currentKitchenImageIndex])

  return (
    <>
      <div className="kitchenPageSection">
        <Header />

        <div className="kitchenPageContainer">
          <div className="kitchenPageLeft">
            <div className="kitchenPageText">
              <div className="space"></div>
              <h2>Wardrobe Installations</h2>
              <p className="kitchenInfo">
                Elevate your storage solutions with our exceptional fixed set
                wardrobe installations. DBI Interior Specialist is your trusted
                partner in seamlessly incorporating stylish and functional
                wardrobes into your living space.<br></br>
                <br></br> Our dedicated team excels at efficiently installing
                pre-designed and custom wardrobe sets that maximize your storage
                potential while enhancing your interior.<br></br>
                <br></br> With a focus on precision and attention to detail, we
                ensure a hassle-free process from start to finish. Discover the
                perfect blend of convenience and aesthetics with our reliable
                wardrobe installation services. Your contentment is paramount,
                and we're dedicated to delivering outcomes that go above and
                beyond your expectations.
              </p>
            </div>
          </div>
          <div className="wardrobePageRight">
            <img
              className={
                currentKitchenImageIndex === 0 ? 'imageIn' : 'imageOut'
              }
              src={kitchenImages[0]}
              alt="Kitchen 1"
            />
            <img
              className={
                currentKitchenImageIndex === 1 ? 'imageIn' : 'imageOut'
              }
              src={kitchenImages[1]}
              alt="Kitchen 2"
            />
            <img
              className={
                currentKitchenImageIndex === 2 ? 'imageIn' : 'imageOut'
              }
              src={kitchenImages[2]}
              alt="Kitchen 3"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default WardrobePage
