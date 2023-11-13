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
                DBI Studio provides a range of services, offering either
                flat-packed or custom-fitted wardrobes. Whatever your specific
                needs or ideas may be, we can bring them to life. Our
                collaboration with you ensures the creation of a space that not
                only aligns with your design preferences but also caters to your
                functional requirements. Effective storage is often overlooked,
                yet it plays a crucial role in a well-functioning home. This is
                where DBI Studio excels—we help you eliminate clutter and
                organize your home just the way you've always envisioned.
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
