import React, {Component} from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { setAuthentication } from '../actions/authentication'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class NavHeader extends Component {





  logout = () => {
    if(this.props.authentication.user){ 
      localStorage.removeItem('token')
      this.props.setAuthentication(null)
    }
    else {
      this.props.history.push('/')
    }
  }



render() {
  return (
    <div>
      <Navbar id='NavHeader' expand='md'>
        <Link to='/Gradebook/1'>
          <NavbarBrand><h1 className='headerTitle'><span role='img' aria-label='apple'>🍎</span>
          <span> </span>
            <span style={{ color: 'orange' }}>T</span>
            <span style={{ color: 'yellow' }}>e</span>
            <span style={{ color: 'rgb(25, 223, 25)' }}>a</span>
            <span style={{ color: 'cyan' }}>c</span>
            <span style={{ color: 'rgb(243, 93, 93)' }}>h</span>
            <span style={{ color: 'violet' }}>e</span>
            <span style={{ color: 'orange' }}>r</span>
            <span style={{ color: 'yellow' }}>'</span>
            <span style={{ color: 'rgb(25, 223, 25)' }}>s</span>
            <span> </span>
            <span style={{ color: 'cyan' }}>P</span>
            <span style={{ color: 'rgb(243, 93, 93)' }}>e</span>
            <span style={{ color: 'violet' }}>t</span>

          </h1></NavbarBrand>
        </Link>
        <Nav className='ml-auto' navbar>
        {
          this.props.authentication.user ?
        <Link to='/'>
          <Button id="SignIn" onClick={this.logout} ><i class="far fa-user"></i> Log Out</Button> 
        </Link> : null
        }
        </Nav>
      </Navbar>
      <br></br>
      <br></br>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setAuthentication
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)
