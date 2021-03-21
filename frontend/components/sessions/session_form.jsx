import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { Button, Form } from 'react-bootstrap';

export default function SessionForm({ processForm, formType, errors, modalOpen, closeSessionForm, showSessionForm }) {
  
  const [form, setForm] = useState(() => ({
    username: '',
    password: '',
    email: ''
  }))

  const [show, setShow] = useState(() => modalOpen);

  useEffect(()=>{
    setShow(modalOpen)
  }, [modalOpen])

  const handleClose = e => {
    setShow(false);
    closeSessionForm(formType);
  }

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

  const changeForm = e => {
    closeSessionForm(formType);
    showSessionForm();
  }

  const header = formType === 'signup' ? 'Sign Up' : 'Log In';
  const cta = formType === 'signup' ? 'Create an Account' : 'Log In';
  const alternate = formType === 'signup' ? 'Log In' : 'Sign Up';
  const alternateLink = formType === 'signup' ? '/login' : '/signup';
  return (
    <div>
      <Modal
        show={show}
        size="lg"
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <ul>
            {errors.length ? errors.map(e => <li key={e}>{e}</li>) : null}
          </ul>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="input" name="username" onChange={handleUpdate} placeholder="Your Username" />
            </Form.Group>

            {formType === 'signup' && 
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" onChange={handleUpdate} placeholder="Your Email" />
              </Form.Group>
            }

            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleUpdate} placeholder="Your Password" />
            </Form.Group>

            <Button variant="teal" type="submit" className="session-submit">
              {cta}
            </Button>
          </Form>
          {/* <form onSubmit={handleSubmit}> */}
            {/* <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={handleUpdate}/> */}

            {/* {formType === 'signup' &&
              <>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handleUpdate}/>
              </>
            } */}
            {/* <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleUpdate}/>

            <input type="submit" value={cta}/> */}
          {/* </form> */}
          {formType === 'signup' && 
            <footer className="session-footer">
              Already have an account? <button as="href" onClick={changeForm} className="session-footer-link">{alternate}</button>
            </footer>
          }
        </Modal.Body>
      </Modal>
    </div>
  )
}
