import React, { useState } from 'react'
import backArrow from '@icons/back.png'
import { MdMarkChatUnread, MdStickyNote2, MdVideocam, MdInsertPhoto, MdOutlineHeadphones, MdPoll } from 'react-icons/md'
import { FiLink2 } from 'react-icons/fi'
import { HiGif } from 'react-icons/hi2'
import './styles.scss'

const SearchContact = ({ onButtonClick, onSearch }) => {
  const userContacts = JSON.parse(localStorage.getItem('userContacts'))
  console.log(userContacts);

  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = event => {
    const value = event.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className='search-contact-container'>
      <div className='search-contact-container__top'>
        <button className='back-button'>
          <img src={backArrow} alt='arrow back icon' onClick={onButtonClick} />
        </button>
        <input className='input-search' type='text' placeholder='Search...' onChange={handleInputChange} value={searchTerm} />
      </div>
      <div className='search-contact-container__bottom'>
        <button className='filter-button'>
          <MdMarkChatUnread />
          <p>Unread</p>
        </button>
        <button className='filter-button'>
          <MdInsertPhoto />
          <p>Photos</p>
        </button>
        <button className='filter-button'>
          <MdVideocam />
          <p>Videos</p>
        </button>
        <button className='filter-button'>
          <FiLink2 />
          <p>Links</p>
        </button>
        <button className='filter-button'>
          <HiGif />
          <p>GIFs</p>
        </button>
        <button className='filter-button'>
          <MdOutlineHeadphones />
          <p>Audio</p>
        </button>
        <button className='filter-button'>
          <MdStickyNote2 />
          <p>Documents</p>
        </button>
        <button className='filter-button'>
          <MdPoll />
          <p>Polls</p>
        </button>
      </div>
    </div>
  )
}

export default SearchContact
