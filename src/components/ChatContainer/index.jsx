import React from 'react'
import messageIcon from '@icons/message.png'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

const ChatContainer = ({ children }) => {

  const navigate = useNavigate()

  const goToContactList = () => {
    navigate('/contact-list')
  }

  return (
    <div className="wrapper">
      <div className="cards-container">
        {children}
      </div>
      <button className="message-button" onClick={() => goToContactList()}>
        <img src={messageIcon} alt="message icon"/>
      </button>
    </div>
  )
}

export default ChatContainer 