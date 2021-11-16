import React from 'react'
import "./ct.css"
import { Card } from 'react-bootstrap'
const Ct = () => {
    return (
        <Card style={{ width: '18rem', borderTop: "solid", borderTopColor:"#113f67", backgroundColor: "#ececec" }}>
        <Card.Body style={{margin:"2px", padding:"2px"}}>
            <div className='abcd'>
          <Card.Title style={{ display: "inline-block", fontSize:"15px",  color:"black"}}><i class="fas fa-cube"></i>Wholesaler Inventory</Card.Title>
          <i style={{color:"black"}} class="fas fa-eye"></i>
          </div>
          <Card.Text style={{fontSize:"12px" , color:"black"}}>
           <p>Exception mgmt tool</p>
           <p>use case management</p>
          </Card.Text>
        </Card.Body>
        <a href="#" style={{marginLeft:"auto"}}>Learn More</a>
      </Card>
    )
}

export default Ct
