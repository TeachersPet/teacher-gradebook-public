import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { Link } from 'react-router-dom'

class Signup extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

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