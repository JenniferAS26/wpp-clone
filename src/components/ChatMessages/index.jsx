import React, { useState, useEffect } from 'react'
import { deleteData } from '@utils/api.js'
import axios from 'axios'
import Swal from 'sweetalert2'
import './styles.scss'
import { useNavigate, useParams } from 'react-router-dom'

const ChatMessages = ({ message }) => {
  const navigate = useNavigate()
  // const [messages, setMessages] = useState([])
  // const contactData = JSON.parse(localStorage.getItem('contactData'))

  // const fetchMessages = async () => {
  //   try {
  //     const response = await axios.get(`https://whatsapp-clone-sprint-db.up.railway.app/messages?userId=${contactData.userId}&contactId=${contactData.contactId}`)
  //     setMessages(response.data)
  //   } catch (error) {
  //     console.error(error.response)
  //   }
  // }

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     try {
  //       const response = await axios.get(`https://whatsapp-clone-sprint-db.up.railway.app/messages?userId=${contactData.userId}&contactId=${contactData.contactId}`)
  //       setMessages(response.data)
  //     } catch (error) {
  //       console.error(error.response)
  //     }
  //   }
  //   fetchMessages()
  // }, [contactData.userId, contactData.contactId])
  
  const deleteMessage = async (id) => {
    const messageConfirmDeletion = await Swal.fire({
      title: 'Are you sure that you want to delete this message?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      'customClass': {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    if (messageConfirmDeletion.isConfirmed) {
      await deleteData('messages', id)
      navigate('/home')
    }
  }

  return (<>
    {
      <div 
        className={`message-container${message?.messages[0].type === 'sent' ? '-out' : '-in'}`}
        onClick={() => {deleteMessage(message?.id)}}
        id={message?.id}  
      >
        <div className='message'>{message?.messages[0].message}</div>
      </div>
    }
  </>)
}

export default ChatMessages