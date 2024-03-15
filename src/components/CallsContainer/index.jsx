import React from 'react'
import callingIcon from '@icons/calling.png'
import missingCallIcon from '@icons/missing-call.png'
import phoneIcon from '@icons/phone.png'
import videoCameraIcon from '@icons/video-camera.png'
import makeACallICon from '@icons/make-a-call.png'
import './styles.scss'

const CallsContainer = () => {
  const userContacts = JSON.parse(localStorage.getItem('userContacts'))
  const userData = JSON.parse(localStorage.getItem('userDataSession'))

  return (
    <section className='calls-container'>
      <div className='calls-container__main'>
        <div className='calls__card'>
          <div className='calls__card--image-container'>
            <img src={userContacts[0]?.contactPhoto} alt='profile picture' />
          </div>
          <div className='calls__card--info-container'>
            <h3 className='title'>{userContacts[0]?.contactName}</h3>
            <div className='detail'>
              <img className='profile-image' src={callingIcon} alt='call icon' />
              <p className='quantity'>(3)</p>
              <p className='date-info'>Yesterday, 10:55 am</p>
            </div>
          </div>
          <img className='calls__card--image' src={phoneIcon} alt='telephone icon' />
        </div>
        <div className='calls__card'>
          <div className='calls__card--image-container'>
            <img src={userContacts[1]?.contactPhoto} alt='profile picture' />
          </div>
          <div className='calls__card--info-container'>
            <h3 className='title'>{userContacts[1]?.contactName}</h3>
            <div className='detail'>
              <img className='profile-image' src={missingCallIcon} alt='call icon' />
              <p className='quantity'>(3)</p>
              <p className='date-info'>Yesterday, 10:55 am</p>
            </div>
          </div>
          <img className='calls__card--image' src={videoCameraIcon} alt='telephone icon' />
        </div>
        <div className='calls__card'>
          <div className='calls__card--image-container'>
            <img src={userContacts[2]?.contactPhoto} alt='profile picture' />
          </div>
          <div className='calls__card--info-container'>
            <h3 className='title'>{userContacts[2]?.contactName}</h3>
            <div className='detail'>
              <img className='profile-image' src={missingCallIcon} alt='call icon' />
              <p className='quantity'>(3)</p>
              <p className='date-info'>Yesterday, 10:55 am</p>
            </div>
          </div>
          <img className='calls__card--image' src={phoneIcon} alt='telephone icon' />
        </div>
        <div className='calls__card'>
          <div className='calls__card--image-container'>
            <img src={userContacts[3]?.contactPhoto} alt='profile picture' />
          </div>
          <div className='calls__card--info-container'>
            <h3 className='title'>{userContacts[3]?.contactName}</h3>
            <div className='detail'>
              <img className='profile-image' src={callingIcon} alt='call icon' />
              <p className='quantity'>(3)</p>
              <p className='date-info'>Yesterday, 10:55 am</p>
            </div>
          </div>
          <img className='calls__card--image' src={phoneIcon} alt='telephone icon' />
        </div>
        <div className='calls__card'>
          <div className='calls__card--image-container'>
            <img src={userContacts[4]?.contactPhoto} alt='profile picture' />
          </div>
          <div className='calls__card--info-container'>
            <h3 className='title'>{userContacts[4]?.contactName}</h3>
            <div className='detail'>
              <img className='profile-image' src={callingIcon} alt='call icon' />
              <p className='quantity'>(3)</p>
              <p className='date-info'>Yesterday, 10:55 am</p>
            </div>
          </div>
          <img className='calls__card--image' src={phoneIcon} alt='telephone icon' />
        </div>
        <div className='calls__card'>
          <div className='calls__card--image-container'>
            <img src={userContacts[5]?.contactPhoto} alt='profile picture' />
          </div>
          <div className='calls__card--info-container'>
            <h3 className='title'>{userContacts[5]?.contactName}</h3>
            <div className='detail'>
              <img className='profile-image' src={callingIcon} alt='call icon' />
              <p className='quantity'>(3)</p>
              <p className='date-info'>Yesterday, 10:55 am</p>
            </div>
          </div>
          <img className='calls__card--image' src={videoCameraIcon} alt='telephone icon' />
        </div>
        <div className='calls__card'>
          <div className='calls__card--image-container'>
            <img src={userContacts[6]?.contactPhoto} alt='profile picture' />
          </div>
          <div className='calls__card--info-container'>
            <h3 className='title'>{userContacts[6]?.contactName}</h3>
            <div className='detail'>
              <img className='profile-image' src={callingIcon} alt='call icon' />
              <p className='quantity'>(3)</p>
              <p className='date-info'>Yesterday, 10:55 am</p>
            </div>
          </div>
          <img className='calls__card--image' src={phoneIcon} alt='telephone icon' />
        </div>
        <div className='calls__card'>
          <div className='calls__card--image-container'>
            <img src={userContacts[7]?.contactPhoto} alt='profile picture' />
          </div>
          <div className='calls__card--info-container'>
            <h3 className='title'>{userContacts[7]?.contactName}</h3>
            <div className='detail'>
              <img className='profile-image' src={callingIcon} alt='call icon' />
              <p className='quantity'>(3)</p>
              <p className='date-info'>Yesterday, 10:55 am</p>
            </div>
          </div>
          <img className='calls__card--image' src={phoneIcon} alt='telephone icon' />
        </div>
        <button className='make-a-call'>
          <img src={makeACallICon} alt='call icon' />
        </button>
      </div>
    </section>
  )
}

export default CallsContainer