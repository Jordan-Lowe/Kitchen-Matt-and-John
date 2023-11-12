import { useState, useEffect } from 'react'
import '../../public/Styles/homePage.css'
import NavBar from './NavBar'
import Banner from './Banner'
import Review from './Review'

const kitchenImages = [
  '../Images/Kitchen/3Kitchen.jpg',
  '../Images/Kitchen/6Kitchen.jpeg',
  '../Images/Kitchen/7Kitchen.jpeg',
  '../Images/Kitchen/8Kitchen.jpeg',
]

function HomePage() {
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
      <div className="homePageSection">
        <NavBar />
        <div className="homePageContainer">
          <div className="homePageLeft">
            <div className="homeLogo">
              <img
                src="../Images/Logos/SecondLogo.png"
                alt="Logo"
                className="home2ndLogo"
              />
            </div>
          </div>
          <div className="homePageRight">
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
            <img
              className={
                currentKitchenImageIndex === 3 ? 'imageIn' : 'imageOut'
              }
              src={kitchenImages[2]}
              alt="Kitchen 3"
            />
            <img
              className={
                currentKitchenImageIndex === 4 ? 'imageIn' : 'imageOut'
              }
              src={kitchenImages[2]}
              alt="Kitchen 3"
            />

            <Review />
          </div>
        </div>
        <div className="bannerSection">
          <Banner />
        </div>
      </div>
    </>
  )
}

export default HomePage
