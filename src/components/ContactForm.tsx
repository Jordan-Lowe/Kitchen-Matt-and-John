import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../../public/Styles/contactForm.css'
import Header from './Header'

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (ref.current) {
      emailjs
        .sendForm(
          'service_0mg7g4v',
          'template_bnpealn',
          ref.current,
          'AU1p_xj5N1oAy9WJO'
        )
        .then(
          (result) => {
            console.log(result.text)
            setSuccess(true)
          },
          (error) => {
            console.log(error.text)
            setSuccess(false)
          }
        )
    }
  }

  return (
    <div className="contactSection">
      <Header />
      <div className="contactContainer">
        <div className="contactLeft">
          <form className="contactForm" ref={ref} onSubmit={handleSubmit}>
            <h2>
              Contact us for a free<br></br> <span>consultation!</span>
            </h2>
            <input
              className="contactInput"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="contactInput"
              type="text"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="contactTextArea"
              placeholder="Enquiry"
              name="message"
              rows={10}
            ></textarea>
            <button className="contactButton" type="submit">
              Send
            </button>
            {success &&
              'Your message has been sent. I will get back to you soon'}
          </form>
          <div className="contactCall">
            <h2 className="contactNumber">
              Call us today!<br></br>
              022555645
            </h2>
          </div>
        </div>
        <div className="contactRight">
          <div className="contactMap">
            <iframe
              className="contactMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.1625775014504!2d174.7731406758416!3d-36.88645878161293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4881a1ded0ed%3A0xe6ef3e4c832d7210!2s282%20Manukau%20Road%2C%20Epsom%2C%20Auckland%201023!5e0!3m2!1sen!2snz!4v1692164043320!5m2!1sen!2snz"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
