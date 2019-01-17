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
        <Col md={{ size: 6, offset: 3 }}>
          <Form className="Signup">
              <FormGroup>
                <Label for='first_name'>First Name</Label>
                <Input type='text' name='first_name' id='first_name' placeholder='Grace' value={this.state.first_name} onChange={event => this.setState({ first_name: event.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label for='last_name'> Last Name </Label>
                <Input type='text' name='last_name' id='last_name' placeholder='Hopper' value={this.state.last_name} onChange={event => this.setState({ last_name: event.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label for='grade_level'> Grade Level</Label>
                <Input type='select' name='grade_level' id='grade_level' value={this.state.grade_level} onChange={event => this.setState({ grade_level: event.target.value })} required>
                  <option>K</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </Input>
              </FormGroup>
              <FormGroup>
                <Label for='email'> Email</Label>
                <Input type='email' name='email' id='email' placeholder='email@email.com' value={this.state.email} onChange={event => this.setState({ email: event.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input type='password' name='password' id='password' placeholder='********' value={this.state.password} onChange={event => this.setState({ password: event.target.value })} required />
              </FormGroup>
          
              <Button className='mr-3' type='submit' color='primary'>
                Sign Up
              </Button>
              <Link to='/'>Already A Member? Login.</Link>
            </Form>          </Col>
        </Row>
      </Container>
    )
  }
}

export default Signup