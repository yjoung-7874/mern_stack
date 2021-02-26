import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Alert, Button, Form, FormGroup, Label, Modal, ModalBody, ModalHeader, NavLink } from 'reactstrap'

import { CLEAR_ERROR_REQUEST, REGISTER_REQUEST } from '../../redux/types'

const RegisterModal = () => {
  const [modal, setModal] = useState(false)
  const [form, setValue] = useState({
    name: "",
    email: "",
    password: ""
  })
  
  const [localMsg, setLocalMsg] = useState('')
  
  const {errorMsg} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch({
      type: CLEAR_ERROR_REQUEST
    })
    setModal(!modal)
  }

  useEffect(() => {
    try {
      setLocalMsg(errorMsg)
    } catch (e) {
      console.error(e)
    }
  }, [errorMsg])

  const onChange = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, password} = form
    const newUser = {name, email, password}
    console.log(newUser)
    dispatch({
      type: REGISTER_REQUEST,
      payload: newUser
    })
  }

  return (
    <div>
      <NavLink className="text-white" onClick={handleToggle} href='#' active>REGISTER</NavLink>
        <Modal isOpen={modal} toggle={handleToggle}>
          <ModalHeader toggle={handleToggle}>
            REGISTER
          </ModalHeader>
          <ModalBody>
            {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="name"> Name </Label>
                <Input 
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={onChange}
                />
                <Label for="email"> email </Label>
                <Input 
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={onChange}
                />
                <Label for="password"> Password </Label>
                <Input 
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={onChange}
                />
                <Button color="dark" className="mt-2" block>
                  REGISTER
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
  )
};

export default RegisterModal