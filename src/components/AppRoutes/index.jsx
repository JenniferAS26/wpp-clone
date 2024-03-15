import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WelcomeView from '@pages/WelcomeView'
import SigninForm from '@pages/SigninForm'
import SignupForm from '@pages/SignupForm'
import Home from '@pages/Home'
import Chat from '@pages/Chat'
import ContactInformation from '@pages/ContactInformation'
import UpdateContactInformationForm from '@pages/UpdateContactInformationForm'
import ContactList from '@pages/ContactList'
import NewContact from '@pages/NewContact'
import Profile from '@pages/Profile'
import StatusContainer from '@components/StatusContainer'
import CallsContainer from '@components/CallsContainer'
import Layout from '@components/Layout'
import SendAPicture from '@pages/SendAPicture'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<WelcomeView />} />
      <Route path='sign-in' element={<SigninForm />} />
      <Route path='sign-up' element={<SignupForm />} />
      <Route element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='status' element={<StatusContainer />} />
        <Route path='calls' element={<CallsContainer />} />
      </Route>
      <Route path='chat/:id' element={<Chat/>} />
      <Route path='contact-info/:id' element={<ContactInformation/>} />
      <Route path='edit-contact/:id' element={<UpdateContactInformationForm/>} />
      <Route path='contact-list' element={<ContactList/>} />
      <Route path='new-contact' element={<NewContact/>} />
      <Route path='profile' element={<Profile/>} />
      <Route path='send-picture' element={<SendAPicture/>} />
    </Routes>
  )
}

export default AppRoutes