import { useContext, useRef, useState } from 'react'
import Context from '../Context/index.jsx'
import fetchCustomServerData from '../server/index.js'
import './index.css'

const Login = () => {
  const email = useRef(null)
  const password = useRef(null)
  const context = useContext(Context)
  const [disabled, setDisabled ]= useState(false)


  function login (e) {
    e.preventDefault()
    const emailValue = email.current.value
    const passwordValue = password.current.value

    if (!emailValue || !passwordValue) {
      alert('Please enter email and password')
      return
    }

    setDisabled(true)

    fetchCustomServerData('/login', {
      method: 'POST',
      body: JSON.stringify({ email: emailValue, password: passwordValue }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
        setDisabled(false)
        if (res.token) {
          localStorage.setItem('token', res.token)
          context.setUser({ ...context.user, token: res.token })
          return
        }
        alert(res.message || 'Something went wrong')
    })
    
  }
  
  function signup (e) {
    e.preventDefault()

    const emailValue = email.current.value
    const passwordValue = password.current.value

    if (!emailValue || !passwordValue) {
      alert('Please enter email and password')
      return
    }

    setDisabled(true)

    fetchCustomServerData('/register', {
      method: 'POST',
      body: JSON.stringify({ email: emailValue, password: passwordValue }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
        setDisabled(false)
        if (res.token) {
          localStorage.setItem('token', res.token)
          context.setUser({ ...context.user, token: res.token })
          return
        }
        alert(res.message || 'Something went wrong')
    })
  }

  return <div id='login'>
    <form action={'#'}>
      <h2>Login | Signup</h2>
      <label htmlFor={'email'}>Email</label>
      <input type={'email'} name={'email'} ref={email} />
      <label htmlFor={'password'}>Password</label>
      <input type={'password'} name={'password'} ref={password}/>
      <button type={'submit'} onClick={login} disabled={disabled}>Login</button>
      <button type={'submit'} onClick={signup} disabled={disabled}>Signup</button>
    </form>
  </div>
}

export default Login