import React from 'react'
import "./fapps.css"
import { Card } from 'react-bootstrap'

const Fapps = () => {
    return (
        <Card style={{ width: '15rem',  borderTop: "solid", borderTopColor:"#113f67", backgroundColor: "#ececec" }}>
        <Card.Body style={{margin:"2px"}}>
        <div className='abcde'>
          <Card.Title style={{ display: "inline-block", fontSize:"15px", color:"black", margin:"3px", padding:"3px"}}> <i class="fas fa-star"></i>Exception mgmt tool</Card.Title>
          <i style={{color:"black"}} class="fas fa-eye"></i>
          </div>
        </Card.Body>
      </Card>
    )
}

export default Fapps
