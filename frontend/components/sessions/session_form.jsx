import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { Alert, Button, Form } from 'react-bootstrap';

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
    showSessionForm(alternateLink);
  }

  const authErrorMessage = () => {
    if (errors[0] === 'Unauthorized') {
      return (
      <Alert variant="info">
        Create an 
        <button as="href" onClick={changeForm} className="session-footer-link">
          account 
        </button>
        or log in to enjoy all features.
      </Alert>
      )
    }
  }

  const isInvalid = key => {
    return errors.find(str => str.includes(key));
  }

  const header = formType === 'signup' ? 'Sign Up' : 'Log In';
  const cta = formType === 'signup' ? 'Create an Account' : 'Log In';
  const alternate = formType === 'signup' ? 'Log In' : 'Sign Up';
  const alternateLink = formType === 'signup' ? 'login' : 'signup';
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
          
          {authErrorMessage()}

          {isInvalid('credentials') && 
          <Alert variant='danger'>
            Wrong Credentials
          </Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="input" name="username" onChange={handleUpdate} placeholder="Your Username" isInvalid={isInvalid('Username')}/>
              <Form.Control.Feedback type="invalid">
                Username can't be blank.
              </Form.Control.Feedback>
            </Form.Group>

            {formType === 'signup' && 
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" onChange={handleUpdate} placeholder="Your Email" isInvalid={isInvalid('Email')}/>
                <Form.Control.Feedback type="invalid">
                  Email can't be blank.
                </Form.Control.Feedback>
              </Form.Group>
            }

            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleUpdate} placeholder="Your Password" isInvalid={isInvalid('Password')}/>
              <Form.Control.Feedback type="invalid">
                Password is too short (minimum is 6 characters).
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="teal" type="submit" className="session-submit">
              {cta}
            </Button>
          </Form>
          
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
