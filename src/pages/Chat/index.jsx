import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { createData, updateData } from '@utils/api.js'
import ChatMessages from '@components/ChatMessages'
import Dropdown from 'react-bootstrap/Dropdown'
import smileyFace from '@icons/smiley-face.png'
import backArrow from '@icons/back-grey.png'
import videoCamera from '@icons/video-camera-white.png'
import phone from '@icons/phone-white.png'
import menu from '@icons/menu-vertical.png'
import clip from '@icons/clip.png'
import camera from '@icons/camera.png'
import voiceNote from '@icons/voice-note.png'
import sendMessage from '@icons/send.png'
import MessageContainer from '@components/MessageContainer'
import wallpaper from '@images/wallpaper2.jpg'
import { v4 as uuid } from 'uuid'
import './styles.scss'

const Chat = () => {   
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [sendIconSrc, setSendIconSrc] = useState(voiceNote)

  const contactData = JSON.parse(localStorage.getItem('contactData'))
  const currentId = JSON.parse(localStorage.getItem('currentId'))

  const [messages, setMessages] = useState([])
  
  const fetchMessages = async () => {
    try {
      const response = await axios.get(`https://whatsapp-clone-sprint-db.up.railway.app/messages?userId=${contactData.userId}&contactId=${contactData.contactId}`)
      setMessages(response.data)
    } catch (error) {
      console.error(error.response)
    }
  }

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`https://whatsapp-clone-sprint-db.up.railway.app/messages?userId=${contactData.userId}&contactId=${contactData.contactId}`)
        setMessages(response.data)
      } catch (error) {
        console.error(error.response)
      }
    }
    fetchMessages()
  }, [contactData.userId, contactData.contactId])
  
  const handleInputChange = event => {
    const value = event.target.value
    setInputValue(value)
    
    if (value !== '') {
      setSendIconSrc(sendMessage)
    } else {
      setSendIconSrc(voiceNote)
    }
  }

  const contactDetail = (id) => {
    navigate(`/contact-info/${id}`, {state: data})
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const data = {
      userId: currentId,
      contactId: contactData.contactId,
      messages: [
        {
          message: inputValue,
          type: 'sent', 
          dateTime: Date()
        }
      ],
      id: uuid()
    }

    await createData('messages', data)
    await updateData('chats', contactData.id, { lastMessage: inputValue })
    fetchMessages()
    setInputValue('')
  }  

  return (
    <div id={data.id} className='chats-container'>
      <div className='chats-container__header'>
        <div className='chats-container__header--left'>
          <Link to='/home'><img className='arrow-back' src={backArrow} alt='arrow icon'/></Link>
          <div className='contact-info' onClick={() => contactDetail(data.contactId)}>
            <img src={data.contactPhoto} alt='profile picture' />
            <p className='username'>{data.contactName}</p>
        </div>
        </div>
        <div className='chats-container__header--right'>
          <img src={videoCamera} alt='video camera icon'/>
          <img src={phone} alt='telephone icon'/>
          <Dropdown>
            <Dropdown.Toggle variant='success'>
              <img className='chat-menu-icon' src={menu} alt='menu icon'/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div onClick={() => contactDetail(data.id)}>View contact</div>
              </Dropdown.Item>
              <Dropdown.Item>New broadcast</Dropdown.Item>
              <Dropdown.Item>Linked devices</Dropdown.Item>
              <Dropdown.Item>Starred messages</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className='chats-container__main'>
        <img className='wallpaper-img' src={wallpaper} alt='wallpaper' />
        <MessageContainer>
          {
            messages.map((message, index) => (
              <ChatMessages key={index} message={message} />
            ))
            }
        </MessageContainer>
      </div>
      <form className='chats-container__footer' onSubmit={handleSubmit} >
          <div className='emojis'>
          <img className='smiley-face' src={smileyFace} alt='smiley-face icon'/>
          </div>
          <input 
            onChange={handleInputChange}
            className='input-message' 
            type='text' 
            placeholder='Type a message' 
            name='message'
            autoComplete='off'
            value={inputValue}
          />
          <div className='icons'>
            <img className='clip-icon' src={clip} alt='clip icon'/>
            <Link to='/send-picture'><img className='camera-icon' src={camera} alt='camera icon'/></Link>
          </div>
          <button className='send-message-button'>
            <img 
              className='send-icon' 
              src={sendIconSrc} 
              alt={inputValue !== '' ? 'Send icon' : 'Microphone icon'}
            />
          </button>
      </form>
    </div>
  )
}

export default Chat 