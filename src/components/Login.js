import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Input
} from 'reactstrap'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form className="Login">
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='email' name='email' id='email' value={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input type='password' name='password' id='password' value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
              </FormGroup>
              <Button className="mr-3" type="submit" color="primary">
                Login
              </Button>
              <Link to="/signup">Not a member? Sign Up!</Link>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Login