import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { Link } from 'react-router-dom'

function NavHeader() {
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
          {/* <Button id="SignIn"><i class="far fa-user"></i> Login</Button>{' '}  */}
        </Nav>
      </Navbar>
      <br></br>
      <br></br>
    </div>
  )
}

export default NavHeader
