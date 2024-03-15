import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context'
import { MdOutlineDoneAll } from 'react-icons/md'
import './styles.scss'


const ChatCard = (data) => {
  const context = useContext(UserContext)
  let navigate = useNavigate()

  const showContact = (contactDetail) => {
    context.setContactToShow([...context.contactToShow, contactDetail])
    navigate(`/chat/${contactDetail.contactId}`, {state: contactDetail}  
    )
    localStorage.setItem('contactData', JSON.stringify(contactDetail))
  }

  /** Date format */
  const dateObject = new Date(data.data.dateMessage)
  const formatedDate = dateObject.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) // a.m / p.m

  return (
    <div 
      className='card-chat' 
      id={data.data.id} 
      onClick={() => {
        showContact(data.data)

      }}>
      <img className='image' src={data.data.contactPhoto} alt='profile picture'/>
      <p className='title'>{data.data.contactName}</p>
      <p className='last-message'>{data.data.lastMessage}</p>
      <span className='double-check'>
        <MdOutlineDoneAll/>
      </span>
      <span className='connection'>{formatedDate}</span>
    </div>
  )
}

export default ChatCard