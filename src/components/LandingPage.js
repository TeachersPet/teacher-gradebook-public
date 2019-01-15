import React from 'react';
import { ListGroup, ListGroupItem, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSubjects } from '../actions/subjects'

import Subject from './Subject'


class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  componentDidMount() {
    this.props.getSubjects()
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
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
                  { this.props.subjects.map ( subject => <Subject key={subject.id} {...subject}/>)}
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
                  <Link to="/Students">
                    <ListGroupItem action> Thurman </ListGroupItem>
                  </Link>
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    subjects: state.subjects
    // students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSubjects
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
