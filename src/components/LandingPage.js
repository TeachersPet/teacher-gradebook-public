import React from 'react';
import { ListGroup, ListGroupItem, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'



export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
render(){
  return (
    <div>
    <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '1' })}
          onClick={() => { this.toggle('1'); }}>
          <strong>Subjects</strong>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '2' })}
          onClick={() => { this.toggle('2'); }}>
          <strong>Students</strong>
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={this.state.activeTab}>
    <TabPane tabId="1">
    <Row>
      <Col sm="12">
        <ListGroup>
        <Link to="/Subjects">
          <ListGroupItem action> Social Studies </ListGroupItem>
          <ListGroupItem action> History </ListGroupItem>
          <ListGroupItem action> Math </ListGroupItem>
          <ListGroupItem action> Science </ListGroupItem>
          </Link>
        </ListGroup>
      </Col>
    </Row>
  </TabPane>
</TabContent>
<TabContent activeTab={this.state.activeTab}>
    <TabPane tabId="2">
    <Row>
      <Col sm="12">
        <ListGroup>
        {/* MAP TO STUDENTS HERE */}
          <ListGroupItem action> So </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  </TabPane>
</TabContent>
</div>
    )
  }
}