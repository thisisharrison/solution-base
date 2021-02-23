import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SessionForm({ processForm, formType, errors }) {
  
  const [form, setForm] = useState(() => ({
    username: '',
    password: '',
    email: ''
  }))

  const handleUpdate = e => {
    const updatedForm = Object.assign({}, form, {[e.target.name] : e.target.value});
    setForm(updatedForm);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const submitForm = Object.assign({}, form);
    delete submitForm.errors
    processForm(submitForm);
  }

  const header = formType === 'signup' ? 'Sign Up' : 'Log In';
  const cta = formType === 'signup' ? 'Create an Account' : 'Log In';
  const alternate = formType === 'signup' ? 'Log In' : 'Sign Up';
  const alternateLink = formType === 'signup' ? '/login' : '/signup';
  return (
    <div>
      <h2>{header}</h2>
      
      <Link to={alternateLink}>{alternate}</Link>

      <ul>
        {errors.length ? errors.map(e => <li key={e}>{e}</li>) : null}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleUpdate}/>

        {formType === 'signup' &&
          <>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleUpdate}/>
          </>
        }
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleUpdate}/>

        <input type="submit" value={cta}/>
      </form>
    </div>
  )
}
