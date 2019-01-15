import React from 'react'
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';

function NavHeader() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">📚 Teachers Pet.</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <Button color="primary">Login</Button>{' '}
        </Nav>
      </Navbar>
    </div>
  )
}
export default NavHeader
