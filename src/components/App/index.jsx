import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from '../../Context'
import AppRoutes from '../AppRoutes'
// import WelcomenView from '@pages/WelcomeView'
// import SigninForm from '@pages/SigninForm'
// import SignupForm from '@pages/SignupForm'
// import Home from '@pages/Home'
// import Chat from '@pages/Chat'
// import ContactInformation from '@pages/ContactInformation'
// import UpdateContactInformationForm from '@pages/UpdateContactInformationForm'
// import ContactList from '@pages/ContactList'
// import NewContact from '@pages/NewContact'
// import Profile from '@pages/Profile'
// import StatusContainer from '../StatusContainer'

// const AppRoutes = () => {
//   let routes = useRoutes([
//     { path: '/', element: <WelcomenView/> },
//     { path: '/sign-in', element: <SigninForm/> },
//     { path: '/sign-up', element: <SignupForm/> },
//     { path: '/home', element: <Home/> },
//     { path: '/chat/:id', element: <Chat/> },
//     { path: '/contact-info/:id', element: <ContactInformation/> },
//     { path: '/edit-contact/:id', element: <UpdateContactInformationForm/> },
//     { path: '/contact-list', element: <ContactList/> },
//     { path: '/new-contact', element: <NewContact/> },
//     { path: '/profile', element: <Profile/> },
//     { path: '/search', element: <StatusContainer/> },
//   ])
//   return routes
// }


const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </UserProvider>  
  )
}

export default App