import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteData } from '@utils/api.js'
import Swal from 'sweetalert2'
import Dropdown from 'react-bootstrap/Dropdown'
import backIcon from '@icons/back.png'
import verticalMenu from '@icons/menu-vertical.png'
import carousel1 from '@images/image1.jpg'
import carousel2 from '@images/image2.jpg'
import carousel3 from '@images/image3.jpg'
import carousel4 from '@images/image4.jpg'
import carousel5 from '@images/image5.jpg'
import { 
  FaPhoneAlt, FaVideo, 
  FaChevronRight, FaBell,
  FaFire, FaStar, 
  FaTrashAlt, FaLockOpen 
} from 'react-icons/fa'
import { ImSearch, ImImage } from 'react-icons/im'
import { PiClockCountdownFill } from 'react-icons/pi'
import './styles.scss'

const ContactInformation = () => {
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate()

  
  const contactData = JSON.parse(localStorage.getItem('contactData'))

  const goToUpdateContact = (id) => {
    navigate(`/edit-contact/${id}`)
  }

  const deleteContact = async (id) => {
    const userConfirmDeletion = await Swal.fire({
      title: 'Delete this chat?',
      text: 'Messages will only be removed from this device and you devices on the newer versions of WhatsApp',
      showCancelButton: true,
      confirmButtonText: 'Delete chat',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      "customClass": {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    if (userConfirmDeletion.isConfirmed) {
      await deleteData('chats', id)
      navigate('/home')
      window.location.reload()
    }
  }

  return (
    <section className='contact-info-container' id={data.id}>
      <div className="contact-info-container__top">
        <img 
          className="arrow-back-icon" 
          src={backIcon} 
          alt="back arrow icon"
          onClick={() => navigate(-1)}
        />
        <div className="contact-info-container__top--info contact">
          <img className="contact__photo" src={data.contactPhoto} alt="profile picture"/>
          <h3 className="contact__name">{data.contactName}</h3>
          <span className="contact__number">+57 {data.contactPhoneNumber}</span>
          <div className="contact__actions">
            <div className="contact__actions--options">
              <button>
                <FaPhoneAlt/>
              </button>
              <span>Audio</span>
            </div>
            <div className="contact__actions--options">
              <button>
                <FaVideo/>
              </button>
              <span>Video</span>
            </div>
            <div className="contact__actions--options">
              <button>
                <ImSearch/>
              </button>
              <span>Search</span>
            </div>
          </div>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant='success'>
            <img className="chat-menu-icon" src={verticalMenu} alt="menu icon"/>
          </Dropdown.Toggle>

          <Dropdown.Menu className='dropdown-menu-contact'>
            <Dropdown.Item>Share</Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => goToUpdateContact(data.contactId)}>Edit</div>
            </Dropdown.Item>
            <Dropdown.Item>View in address book</Dropdown.Item>
            <Dropdown.Item>Verify security code</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="contact-info-container__media-links-docs">
        <div className="contact-info-container__media-links-docs--top">
          <p className='p'>Media, links, and docs</p>
          <div>
            <span>8.215</span>
            <button>
              <FaChevronRight/>
            </button>
          </div>
        </div>
        <div className="contact-info-container__media-links-docs--carousel">
          <img src={carousel1} alt="carousel images"/>
          <img src={carousel2} alt="carousel images"/>
          <img src={carousel3} alt="carousel images"/>
          <img src={carousel4} alt="carousel images"/>
          <img src={carousel5} alt="carousel images"/>
        </div>
      </div>
      <div className="contact-info-container__notifications">
        <div className="contact-info-container__notifications--items">
          <FaBell className='i' />
          <span>Mute notifications</span>
        </div>
        <div className="contact-info-container__notifications--items">
          <FaFire className="i" />
          <span>Custom notifications</span>
        </div>
        <div className="contact-info-container__notifications--items">
          <ImImage className='i' />
          <span>Media visibility</span>
        </div>
        <div className="contact-info-container__notifications--items">
          <FaStar className='i' />
          <span>Starred messages</span>
        </div>
      </div>
      <div className="contact-info-container__encryption">
        <div className="contact-info-container__encryption--items" id={data.id}>
          <button 
            className="delete-button" 
            onClick={() => deleteContact(contactData.id)}
          >
            <FaTrashAlt />
          </button>
          <div className="description-wrapper">
            <p className='p'>Delete</p>
          </div>
        </div>
        <div className="contact-info-container__encryption--items">
          <PiClockCountdownFill className="i i-clock"/>
          <div className="description-wrapper">
            <p className='p'>Disappearing messages</p>
            <span>Off</span>
          </div>
        </div>
        <div className="contact-info-container__encryption--items">
          <FaLockOpen className="i"/>
          <div className="description-wrapper">
            <p className='p'>Chat lock</p>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default ContactInformation 