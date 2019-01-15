import React from 'react'
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';


function NavHeader(){
return(
  <div>
  <Navbar id="NavHeader"  expand="md">
    <NavbarBrand id="headerTitle" href="/"><h1>🍎  Teachers Pet.</h1></NavbarBrand>
      <Nav className="ml-auto" navbar>     
        <Button id="SignIn"><i class="far fa-user"></i> Login</Button>{' '}
      </Nav>
  </Navbar>
  <br></br>
</div>
  )
}
export default NavHeader
