// import AboutPage from './components/AboutPage'
import ContactForm from './components/ContactForm'
import HomePage from './components/HomePage'
import KitchenPage from './components/KitchenPage'
import WardrobePage from './components/WardrobePage'

function App() {
  return (
    <>
      <div className="appContainer">
        <div id="home">
          <HomePage />
        </div>
        <div id="kitchen">
          <KitchenPage />
        </div>
        <div id="wardrobe">
          <WardrobePage />
        </div>
        {/* <div id="about">
					<AboutPage />
				</div> */}
        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default App
