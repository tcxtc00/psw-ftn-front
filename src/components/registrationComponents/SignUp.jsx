import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './logInSignUp.css'
import FormInput from './FormInput/FormInput'
import { authService } from '../../api/AuthService'

import React from 'react'

const SignUp = () => {
  const navigate = useNavigate()

  const roleRef = useRef();

  const [allRegisterValues, setAllRegisterValues] = useState(null);

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const roles = [
    {
      id: 0,
      label: 'Patient',
      role: 'Patient'
    },
    {
      id: 1,
      label: 'Doctor Generalist',
      expertise: 'Generalist',
      role: 'Doctor'
    },
    {
      id: 2,
      label: 'Doctor Specialist',
      expertise: 'Specialist',
      role: 'Doctor'
    },
  ]
  const [pickedRole, setPickedRole] = useState()

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
     // label: 'Email',
      required: true,
    },
    {
      id: 2,
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name',
      errorMessage: 'Please insert Name!',
    //  label: 'First Name',
      required: true,
    },
    {
      id: 3,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      errorMessage: 'Please insert Last Name!',
     // label: 'Last Name',
      required: true,
    },
    {
      id: 4,
      name: 'street',
      type: 'text',
      placeholder: 'Street',
     // label: 'Street',
    },
    {
      id: 5,
      name: 'city',
      type: 'text',
      placeholder: 'City',
    //  label: 'City',
    },
    {
      id: 6,
      name: 'phone',
      type: 'text',
      placeholder: 'Phone',
    //  label: 'Phone',
    },
    {
      id: 7,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password must contain 8 or more characters and include at least 1 capital letter and 1 number!',
     // label: 'Password',
      pattern: `(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,
      required: true,
    },
    {
      id: 8,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
     // label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      var roleValue = roles[roleRef.current.value].role;
      values["role"] = roleValue;
      
      if(roleValue !== 'Patient')
      {
        values["expertise"] = roles[roleRef.current.value].expertise;
      }

     console.log(values);
      const response = await authService.register({...values});
      
      console.log('Register response', response);
      if(response.success)
      {
        navigate('/');
        window.location.reload();
      }
      else{
        //toast("Error credentials");
      }
    } catch(err){
        console.log(err)
    }  
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  // const handleChange = (e) => {
  //   setPickedRole(e.target.value)
  //   console.log(`Option selected:`, pickedRole)
  // }

  return ( 
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Sign Up</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
          <select ref={roleRef} name="roleId" id="roleId" className='box'>
            {roles.map((role,index) => (
              <option key={index} value={index}>
                {role.label}
              </option>
            ))}
          </select>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
