import React from 'react'
import "./ct.css"
import { Card } from 'react-bootstrap'
const Ct = () => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Wholesaler Inventory</Card.Title>
          <Card.Text>
           <p>Exception mgmt tool</p>
           <p>use case management</p>
          </Card.Text>
          <Card.Link href="#">Learn More</Card.Link>
        </Card.Body>
      </Card>
    )
}

export default Ct
