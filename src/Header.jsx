import React from 'react'
import Logo from './Components/Logo'
import SignIn from './Components/SignIn'
import './Header.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
    <div className='container-fluid d-flex justify-content-between header'>
      <Logo />
      <SignIn />
    </div>
  )
}

export default Header