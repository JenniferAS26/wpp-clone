import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import house from '@images/house.jpg'
import sendIcon from '@icons/send.png'
import { FaCrop, FaRegStickyNote, FaPencilAlt, } from 'react-icons/fa'
import { FaT, FaXmark } from 'react-icons/fa6'
import './styles.scss'

const SendAPicture = () => {
  const navigate = useNavigate()

  return (
    <section className='send-picture-container'>
      <img className='send-picture-container__image' src={house} alt='house image' />
      <div className='send-picture-container__top'>
        <Link to={navigate(-1)}>
          <button className='close-picture'>
            <FaXmark />
          </button>
        </Link>
        <div className='right'>
          <button>
            <FaCrop />
          </button>
          <button>
            <FaRegStickyNote />
          </button>
          <button>
            <FaT />
          </button>
          <button>
            <FaPencilAlt />
          </button>
        </div>
      </div>
      <div className='send-picture-container__choose-option'>
        <div className='name-wrapper'>
          <p className='name-wrapper__title'>Jane Doe</p>
        </div>
        <img className='send-icon' src={sendIcon} alt='send icon' />
      </div>
    </section>
  )
}

export default SendAPicture
