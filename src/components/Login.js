import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Container, Row, Col, Input, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { setAuthentication } from '../actions/authentication'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import request from '../utils/request'


class Login extends Component {
  constructor(props) {
  super(props)

  this.state = {
    email: '',
    password: '',
    showErrorMessage: false
  }
  }

  handleSignIn = event => {
  event.preventDefault()

  request('/login', 'post', {
    email: this.state.email,
    password: this.state.password
  })
    .then(response => {
    this.setState({ showErrorMessage: false })

    localStorage.setItem('token', response.data.token)
    return request('/login')
    })
    .then(response => {
    this.props.setAuthentication(response.data.id)
    this.props.history.push('/Gradebook/1')
    })
    .catch(error => {
    this.setState({ showErrorMessage: true })
    })
  }

  render() {
  return (
    <Container>
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
      <Form className='Login' onSubmit={this.handleSignIn}>
        <FormGroup>
        <Label for='email'>Email</Label>
        <Input type='email' name='email' id='email' placeholder='email@email.com' value={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
        </FormGroup>
        <FormGroup>
        <Label for='password'>Password</Label>
        <Input type='password' name='password' id='password' value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
        </FormGroup>

        <Row>
        <Col md='2'>
          <Button className='mr-3' type='submit' color='primary'>
          Login
        </Button>

        </Col>
        {this.state.showErrorMessage ?
          <Col md='10'>
          <Alert className='login-fail' color='danger'>Incorrect email or password.</Alert>
          </Col>
          : null
        }
        </Row>
        <Link to='/Signup'>Not a member? Sign Up!</Link>
      </Form>
      </Col>
    </Row>
    </Container>
  )
  }
}

const mapStateToProps = (state) => {
  return {
  assignments: state.assignments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  setAuthentication
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
