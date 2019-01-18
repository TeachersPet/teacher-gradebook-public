import React from 'react';
import { ListGroup, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSubjects } from '../actions/subjects'
import { getStudents } from '../actions/students'
import Subject from './Subject'
import Student from './Student'

class LandingPage extends React.Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    activeTab: this.props.match.params.tab 
  };
  }

  componentDidMount() {
  const teacherId = this.props.authentication.user
  this.props.getSubjects(teacherId)
  this.props.getStudents(teacherId)
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
    <Container>
    <Nav tabs>
      <NavItem>
      <NavLink className={`SubjectLand ${classnames({ active: this.state.activeTab === '1' })}`}
        onClick={() => { this.toggle('1'); }}>
        <strong>Subjects</strong>
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink id='StudentLand'
        className={classnames({ active: this.state.activeTab === '2' })}
        onClick={() => { this.toggle('2'); }}>
        <strong>Students</strong>
      </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={this.state.activeTab}>
      <TabPane tabId='1'>
      <Row>
        <Col sm='12'>
        <ListGroup>
          { this.props.subjects.map ( subject => <Subject key={subject.id} {...subject}/>)}
        </ListGroup>
        </Col>
      </Row>
      </TabPane>
    </TabContent>
    <TabContent activeTab={this.state.activeTab}>
      <TabPane tabId='2'>
      <Row>
        <Col sm='12'>
        <ListGroup>
          { this.props.students.map ( student => <Student key={student.id} {...student}/>)}
        </ListGroup>
        </Col>
      </Row>
      </TabPane>
    </TabContent>
    </Container>
  )
  }
}

const mapStateToProps = (state) => {
  return {
  subjects: state.subjects,
  students: state.students,
  authentication: state.authentication
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  getSubjects,
  getStudents
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
