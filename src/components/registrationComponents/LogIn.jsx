import React from 'react'
import { useState } from 'react'
import './logInSignUp.css'
import FormInput from './FormInput/FormInput'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 7,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Please enter valid password!',
      label: 'Password',
      required: true,
    },
  ]

  //da se ne bi refreshovala cela stranica
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default LogIn
