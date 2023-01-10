import React from 'react'
import LoginForm from './LoginForm'
import { useState } from "react"


const Login = ({setCorrect}) => {
  const username = "Simon123"
  const password = "1234"
  const [notFilled,setNotFilled] = useState(false)
 

  const onSubmit = (e) => {
    e.preventDefault();
    const usernameEntered = e.target.elements.username.value
    const passwordEntered = e.target.elements.password.value
    if (!usernameEntered || !passwordEntered) {
      setNotFilled(true)
    }

    if (usernameEntered === username && passwordEntered === password) {
      setCorrect(true)
    }

    // TODO: Ask server for data securly
    
    
    
  }


  return (
    
    <div className=' flex h-screen' >
        <div className='m-auto '>
            <div className='flex justify-center mb-6'>
                <h1 className=' text-4xl font-bold font-mono '>Family Website</h1>
            </div>
            <LoginForm onSubmit={onSubmit} notFilled={notFilled}/>
            
        </div>
    </div>
  
  )
}

export default Login