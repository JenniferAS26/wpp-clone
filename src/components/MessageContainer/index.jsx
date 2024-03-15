import React from 'react'
import './styles.scss'

const MessageContainer = ({ children }) => {
  return (<>
    <div className='messages-container'>
      {children}
    </div>
  </>)
}

export default MessageContainer