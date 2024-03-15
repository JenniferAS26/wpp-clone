import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { deleteData } from '@utils/api.js'
import Swal from 'sweetalert2'
import Dropdown from 'react-bootstrap/Dropdown'
import verticalMenu from '@icons/menu-vertical.png'
import searchIcon from '@icons/search.png'
import cameraIcon from '@icons/camera.png'
import './styles.scss'

const Header = ({ onButtonClick }) => {
  const navigate = useNavigate()
  
  const goToContactList = () => {
    navigate('/contact-list')
  }

  const goToProfile = () => {
    navigate('/profile')
  }

  const userData = JSON.parse(localStorage.getItem('userDataSession'))

  const deleteAccount = async (id) => {
    const userConfirmDeletion = await Swal.fire({
      title: 'Are you sure that you want to delete this account?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      'customClass': {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    if (userConfirmDeletion.isConfirmed) {
      await deleteData('users', id)
      navigate('/sign-in')
      window.location.reload()
    }
  }

  return (
    <div className='header'>
      <div className='header__top'>
        <h4 className='title'>WhatsApp</h4>
        <div className='icons'>
          <img src={searchIcon} alt='search icon' onClick={onButtonClick} />
          <Dropdown>
            <Dropdown.Toggle variant='success'>
              <img className='home-menu-icon' src={verticalMenu}/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div onClick={() => goToContactList()}>New contact</div>
              </Dropdown.Item>
              <Dropdown.Item>New broadcast</Dropdown.Item>
              <Dropdown.Item>Linked devices</Dropdown.Item>
              <Dropdown.Item>
                <div onClick={() => goToProfile()}>Profile</div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div onClick={() => deleteAccount(userData.id)}>Delete this account</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className='header__bottom home-header'>
        <img className='home-header__image camera-icon' src={cameraIcon} alt='camera icon'/>
        <div className='home-header__options-container'>
          <Link to='/home'><button className='home-header__options-container--option chats'>CHATS</button></Link>
          <Link to='/status'><button className='home-header__options-container--option status'>STATUS</button></Link>
          <Link to='/calls'><button className='home-header__options-container--option calls'>CALLS</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Header 