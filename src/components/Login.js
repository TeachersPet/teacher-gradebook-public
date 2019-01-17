import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Container, Row, Col, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import {setAuthentication} from '../actions/authentication'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleSignIn = event => {
    // event.preventDefault()
    
    // const { inputEmail, inputPassword } = event.target

    // request('/auth/token','post', {
    //   username: inputEmail.value,
    //   password: inputPassword.value })
    // .then(response => {
    //   this.setState({ showErrorMessage: false })
      
    //   localStorage.setItem('token', response.data.token)
    //   return request('/auth/token')
    // })
    // .then(response => {
    //   this.props.setAuthentication(response.data)
    //   this.props.history.push('/')
    // })
    // .catch(error => {
    //   this.setState({showErrorMessage: true})
    // })
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
              <Button className='mr-3' type='submit' color='primary'>
                Login
              </Button>
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
