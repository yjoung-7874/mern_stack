import React from 'react'
import { Row, Spinner } from 'reactstrap'

export const GrowingSpinner = (
  <div>
    <Row className='d-flex justify-content-center m-5'> 
      <Spinner sytle={{width: "2rem", height: "2rem"}} type="grow" color="primary" /> 
      <Spinner sytle={{width: "2rem", height: "2rem"}} type="grow" color="secondary" /> 
      <Spinner sytle={{width: "2rem", height: "2rem"}} type="grow" color="success" /> 
      <Spinner sytle={{width: "2rem", height: "2rem"}} type="grow" color="danger" /> 
      <Spinner sytle={{width: "2rem", height: "2rem"}} type="grow" color="warning" /> 
      <Spinner sytle={{width: "2rem", height: "2rem"}} type="grow" color="info" /> 
      <Spinner sytle={{width: "2rem", height: "2rem"}} type="grow" color="light" /> 
      <Spinner sytle={{width: "2rem", height: "2rem"}} type="grow" color="dark" /> 
    </Row>
  </div>
)