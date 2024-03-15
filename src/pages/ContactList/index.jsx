import React from 'react'
import { useNavigate } from 'react-router-dom'
import ContactCard from '@components/ContactCard'
import backArrow from '@icons/back.png'
import menu from '@icons/menu-vertical.png'
import searchIcon from '@icons/search.png'
import qr from '@icons/qr.png'
import { HiUserPlus } from 'react-icons/hi2'
import './styles.scss'

const ContactList = () => {
  const userContacts = JSON.parse(localStorage.getItem('userContacts'))

  const navigate = useNavigate()

  const goToNewContact = () => {
    navigate('/new-contact')
  }

  const goBack = () => {
    navigate('/home')
  }

  return (
    <section className='contact-list-container'>
      <div className='contact-list-container__header'>
        <div className='contact-list-container__header--left'>
          <img src={backArrow} alt='arrow back icon' onClick={() => goBack()} />
          <div className='info'>
            <h2 className='info__title'>Select contact</h2>
            <span className='info__text'>{userContacts.length} contacts</span>
          </div>
        </div>
        <div className='contact-list-container__header--right'>
          <img src={searchIcon} alt='search icon' />
          <img src={menu} alt='menu icon' />
        </div>
      </div>
      <div className='contact-list-container__main'>
        <div className='new-contact-container'>
          <div className='left-group'>
            <button className='new-contact-container__button' onClick={() => goToNewContact()}>
              <HiUserPlus/>
            </button>
            <h3 className='new-contact-container__title'>New contact</h3>
          </div>
          <img src={qr} alt='qr icon' />
        </div>
        <span className='section-title'>Contacts on WhatsApp</span>
        <div className='cards-contacts-container'>
          {/* <ContactCard/>
          <ContactCard/>
          <ContactCard/> */}
          {
            userContacts.map(contact => (
              <ContactCard key={contact.contactId} data={contact} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ContactList