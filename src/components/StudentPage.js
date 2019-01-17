import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SubjectAccordian from './SubjectAccordian'
import { getSubjects } from '../actions/subjects'
import { getOneStudent } from '../actions/students'

export class StudentPage extends Component {

  //replace 1 wtih teacherId
  componentDidMount() {
    const studentId = this.props.match.params.id
    this.props.getSubjects(1)
    this.props.getOneStudent(1, studentId)
  }

  render() {
    const studentId = this.props.match.params.id
    // const ActiveTab = this.state.activeTab
    return (
      <Container>
        <Row>
          <h1 id='StudentName'>{this.props.student.first_name} {this.props.student.last_name}</h1>
          <Col >
            <Link to={`/gradebook/2`}>
              <Button className='float-right' id='Back'>Back to Students</Button>
            </Link>
          </Col>
        </Row>
        <div className='accordion' id='accordion'>
          {this.props.subjects.map(subject => <SubjectAccordian key={subject.id} {...subject} studentId={studentId} />)}
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subjects: state.subjects,
    student: state.student
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSubjects,
    getOneStudent
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage)
