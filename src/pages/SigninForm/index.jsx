import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getDataByQueryParams } from '@utils/api'
import Swal from 'sweetalert2'
import './styles.scss'

const SigninForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    const userData = await getDataByQueryParams('users', { phone_number: phoneNumber })
    localStorage.setItem('userDataSession', JSON.stringify(userData[0]))
    localStorage.setItem('currentId', JSON.stringify(userData[0].id))
    if (userData.length) {
      if (userData[0]?.password === password) {
        Swal.fire({
          title: `Welcome back ${userData[0].name}`,
          confirmButtonText: 'Ok',
          reverseButtons: true,
          "customClass": {
              button: 'custom-button',
              htmlContainer: 'custom-container'
          },
        })
        navigate('/home')
      } else {
        Swal.fire({
          title: 'Phone or passord wrong!',
          confirmButtonText: 'Ok',
          reverseButtons: true,
          "customClass": {
              button: 'custom-button',
              htmlContainer: 'custom-container'
          },
        })
      }
    } else {
      Swal.fire({
        title: 'Phone or passord wrong, Try again!',
        confirmButtonText: 'Ok',
        reverseButtons: true,
        "customClass": {
            button: 'custom-button',
            htmlContainer: 'custom-container'
        },
      })
    }
  }

  return (
    <div className="wrapper-signin">
      <div className="auth-container">
        <h2 className="auth-container__title">Enter your phone number</h2>
        <form 
          className="auth-container__form form"
          onSubmit={handleSubmit}
        >
          <div className="form__input-wrapper">
            <div className="input-container">
              <input 
                id="input-phone" 
                className="form__input" 
                type="number"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)} 
                required />
              <label className="input-label" htmlFor="input-phone">Enter your phone number</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <input 
                id='input-password' 
                className='form__input' 
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)} 
                required />
              <label className='input-label' htmlFor='input-password'>Enter your password</label>
              <div className='form__input--error error'></div>
            </div>
          </div>
          {/* <button className='form__button' type='submit'><Link to='/home' className='link'>next</Link></button> */}
          <button className='form__button' type='submit'>next</button>
        </form>
        <Link to='/sign-up'><span className='signup-redirect'>Sign up for free</span></Link>
      </div>
    </div>
  )
}

export default SigninForm