import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { updateData, saveImage } from '@utils/api.js'
import Swal from 'sweetalert2'
import backArrow from '@icons/back.png'
import './styles.scss'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('userDataSession'))

  const { register, handleSubmit } = useForm()
  const [imagePreview, setImagePreview] = useState(user.url_image)
  const navigate = useNavigate()

  console.log(user);

  const handleImageChange = event => {
    const chosenImage = event.target.files[0]
    const imageReaderAPI = new FileReader()

    imageReaderAPI.onloadend = () => {
      setImagePreview(imageReaderAPI.result)
    }

    if (chosenImage) {
      imageReaderAPI.readAsDataURL(chosenImage)
    }
  }

  const goBack = () => {
    navigate('/home')
  }

  const onSubmit = async userInfo => {
    
    const file = userInfo.contactPhoto[0]
    const imageUrl = await saveImage(file)
    const newUserInfo = {
      name: userInfo.name,
      password: userInfo.password,
      quote: userInfo.quote,
      url_image: imageUrl

    }
    await updateData('users', user.id, newUserInfo)
    const userConfirmDeletion = await Swal.fire({
      title: 'Your new info was updated successfully',
      confirmButtonText: 'Ok',
      reverseButtons: true,
      "customClass": {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    if (userConfirmDeletion.isConfirmed) {
      navigate('/home')
      window.location.reload()
    }
    
    
    
  }

  return (
    <section className='profile-container'>
      <div className='profile-container__header'>
        <img className='profile-container__header--icon' src={backArrow} alt='arrow back icon' onClick={() => goBack()} />
        <h2 className='profile-container__header--title'>Profile</h2>
      </div>
      <div className='profile-container__main'>
        <form 
          className="profile-container__form form" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="profile-picture-wrapper">
            <div className="form__profile-picture">
              <figure className="form__profile-picture--image-container" name="avatar">
                <img className="current-picture" src={imagePreview} alt="dummy image" />
              </figure>
              <div className="form__profile-picture--input-container">
                <label htmlFor="input-url"><span>Choose a file</span> or drag it here.</label>
                <input
                  type="file" 
                  id="input-url" 
                  className="profile-input-image"
                  {...register('contactPhoto')}
                  name='contactPhoto'
                  accept='image/*' 
                  onChange={handleImageChange}  
                />
              </div>
            </div>
          </div>
          <div className="form__input-wrapper">
            <div className="input-container">
              <input 
                className="form__input profile-name-input" 
                type="text" 
                {...register('name')}
                name='name'
                required 
                />
              <label className="input-label" htmlFor="">{user.name}</label>
              <div className="form__input--error error"></div>
              
            </div>
            <div className="input-container">
              <input 
              className="form__input profile-number-input" 
              type="number"
              {...register('phone_number')}
              name='phone_number'
              required 
              disabled
              />
              <label className="input-label" htmlFor="">{user.phone_number}</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <input 
              className="form__input profile-password-input" 
              type="password"
              {...register('password')}
              name='password'
              required 
              />
              <label className="input-label" htmlFor="">New password</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <textarea 
              className="form__textarea form__input profile-quote-textarea" 
              cols="30" 
              rows="10"
              {...register('quote')}
              name='quote'
              required 
              ></textarea>
              <label className="input-label" htmlFor="">{user.quote}</label>
            </div>
          </div>
          <input className="form__submit" type="submit" value="Update" />
        </form>
      </div>
    </section>
  )
}

export default Profile