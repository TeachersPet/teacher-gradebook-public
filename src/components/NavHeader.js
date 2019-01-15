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
    <NavbarBrand href="/Gradebook"><h1 className="headerTitle">🍎 
    <text> </text>
    <text style={{color: 'orange' }}>T</text>
    <text style={{color: 'yellow' }}>e</text>
    <text style={{color: 'rgb(25, 223, 25)' }}>a</text>
    <text style={{color: 'cyan' }}>c</text>
    <text style={{color: 'rgb(243, 93, 93)' }}>h</text>
    <text style={{color: 'violet' }}>e</text>
    <text style={{color: 'orange' }}>r</text>
    <text style={{color: 'yellow' }}>'</text>
    <text style={{color: 'rgb(25, 223, 25)' }}>s</text>
    <text> </text>
    <text style={{color: 'cyan' }}>P</text>
    <text style={{color: 'rgb(243, 93, 93)' }}>e</text>
    <text style={{color: 'violet' }}>t</text>

    </h1></NavbarBrand>
      <Nav className="ml-auto" navbar>     
        {/* <Button id="SignIn"><i class="far fa-user"></i> Login</Button>{' '} */}
      </Nav>
  </Navbar>
  <br></br>
  <br></br>
</div>
  )
}
export default NavHeader
