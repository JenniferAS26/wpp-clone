import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const WelcomeView = () => {
  return (
    <section className="wrapper-welcome">
      <div className="welcome-container">
        <h1 className="welcome-container__title">Welcome to WhatsApp</h1>
        <div className="welcome-container__image-container"></div>
        <p className="welcome-container__text">Read our <span>Privacy Policy</span>. Tap "Agree and continue" to accept the <span>Terms of Service</span>.</p>
        <Link to='/sign-in'><button className="welcome-container__button agree-continue">Agree and continue</button></Link>
        <div className="welcome-container__brand-container">
            <p className="text">from</p>
            <p className="brand">FACEBOOK</p>
        </div>
      </div>
    </section>
  )
}

export default WelcomeView 