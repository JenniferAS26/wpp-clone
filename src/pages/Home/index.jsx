import { useState, useEffect } from 'react'
import ChatContainer from '../../components/ChatContainer'
import ChatCard from '../../components/ChatCard'

const Home = ({ filteredContacts }) => {
  const [contacts, setContacts] = useState([])
  const [messages, setMessages] = useState([])

  localStorage.setItem('userContacts', JSON.stringify(contacts))
  
  useEffect( () => {
    const currentId = localStorage.getItem('currentId')
    fetch(`https://backend-whatsapp-clone-onux.onrender.com/chats?userId=${currentId}`)
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])


  return (
    <div className='home-container'>
      <ChatContainer contacts={filteredContacts}>
        {
          contacts.map(contact => (
            <ChatCard key={contact.id} data={contact}/>
          ))
        }
      </ChatContainer>
    </div>
  ) 
}

export default Home 