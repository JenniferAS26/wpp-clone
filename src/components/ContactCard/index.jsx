import React from 'react'
import './styles.scss'

const ContactCard = (data) => {
  
  return (
    <div className='card-contact'>
      <img className='card-contact__image' src={data.data.contactPhoto} alt='profile picture' />
      <h2 className='card-contact__title'>{data.data.contactName}</h2>
    </div>
  )
}

export default ContactCard