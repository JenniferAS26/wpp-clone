import React from 'react'
import menuHorizontal from '@icons/menu-horizontal.png'
import edit from '@icons/edit.png'
import takeAPicture from '@icons/take-a-picture.png'
import './styles.scss'

const StatusContainer = () => {
  const userContacts = JSON.parse(localStorage.getItem('userContacts'))
  const userData = JSON.parse(localStorage.getItem('userDataSession'))

  return (
    <section className='status-container'>
      <div className='status-container__main'>
        <div className='status-container__main--my-status my-status'>
          <div className='my-status__card'>
            <div className='my-status__card--image-container'>
              <img src={userData.url_image} alt='profile picture' />
            </div>
            <div className='my-status__card--info-container'>
              <h3 className='title'>My status</h3>
              <p className='date-info'>Yesterday, 10:55 am</p>
            </div>
            <img src={menuHorizontal} alt='menu icon' />
          </div>
        </div>
        <div className='status-container__main--recent-updates recent-updates'>
          <h3 className='recent-updates__title'>Recent updates</h3>
          <div className='recent-updates__card'>
            <div className='recent-updates__card--image-container'>
              <img src={userContacts[0]?.contactPhoto} alt='profile picture' />
            </div>
            <div className='recent-updates__card--info-container'>
              <h3 className='title'>{userContacts[0]?.contactName}</h3>
              <p className='date-info'>30 minutes ago</p>
            </div>
          </div>
          <div className='recent-updates__card'>
            <div className='recent-updates__card--image-container'>
              <img src={userContacts[1]?.contactPhoto} alt='profile picture' />
            </div>
            <div className='recent-updates__card--info-container'>
              <h3 className='title'>{userContacts[1]?.contactName}</h3>
              <p className='date-info'>30 minutes ago</p>
            </div>
          </div>
          <div className='recent-updates__card'>
            <div className='recent-updates__card--image-container'>
              <img src={userContacts[2]?.contactPhoto} alt='profile picture' />
            </div>
            <div className='recent-updates__card--info-container'>
              <h3 className='title'>{userContacts[2]?.contactName}</h3>
              <p className='date-info'>30 minutes ago</p>
            </div>
          </div>
        </div>
        <div className='status-container__main--viewed-updates viewed-updates'>
          <h3 className='viewed-updates__title'>Viewed updates</h3>
          <div className='viewed-updates__card'>
            <div className='viewed-updates__card--image-container'>
              <img src={userContacts[3]?.contactPhoto} alt='profile picture' />
            </div>
            <div className='viewed-updates__card--info-container'>
              <h3 className='title'>{userContacts[3]?.contactName}</h3>
              <p className='date-info'>30 minutes ago</p>
            </div>
          </div>
          <div className='viewed-updates__card'>
            <div className='viewed-updates__card--image-container'>
              <img src={userContacts[4]?.contactPhoto} alt='profile picture' />
            </div>
            <div className='viewed-updates__card--info-container'>
              <h3 className='title'>{userContacts[4]?.contactName}</h3>
              <p className='date-info'>30 minutes ago</p>
            </div>
          </div>
          <div className='viewed-updates__card'>
            <div className='viewed-updates__card--image-container'>
              <img src={userContacts[5]?.contactPhoto} alt='profile picture' />
            </div>
            <div className='viewed-updates__card--info-container'>
              <h3 className='title'>{userContacts[5]?.contactName}</h3>
              <p className='date-info'>30 minutes ago</p>
            </div>
          </div>
        </div>
        <div className='status-container__main--buttons'>
          <button className='edit'>
            <img src={edit} alt='edit icon' />
          </button>
          <button className='take-picture'>
            <img src={takeAPicture} alt='picture status icon' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default StatusContainer