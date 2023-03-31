import React from 'react'
import LoginForm from './components/LoginForm'
import PosterFormLogin from './components/PosterFormLogin'
import './styles/Login.css'

export default function Login() {
  return (
    <div className='container-login-page'>
      
      <div className='login-form-page'>
      <LoginForm />
      </div>
      <div className='poster'>
        <PosterFormLogin />
      </div>
    </div>
  )
}



