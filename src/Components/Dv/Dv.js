import React from 'react'
import "./dv.css"
import { Card } from 'react-bootstrap'
const Dv = () => {
    return (
        <Card style={{ width: '18rem', borderTop: "solid", borderTopColor:"#113f67", backgroundColor: "#ececec" }}>
        <Card.Body style={{margin:"2px"}}>
            <div className='abcdef'>
          <Card.Title style={{ display: "inline-block", fontSize:"15px" , color:"black"}}><i class="fas fa-cube"></i> Connected Vissibilty </Card.Title>
          <i style={{color:"black"}} class="fas fa-eye"></i>
            </div>
          <Card.Text style={{fontSize:"12px" , color:"black"}}>
                <p>long label tool</p>
               <p>long label tool</p>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Dv
