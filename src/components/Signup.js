import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

class Signup extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      first_name: '',
      last_name: '',
      grade_level: '',
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Signup</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Signup