import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SubjectAccordian from './SubjectAccordian'
import { getSubjects } from '../actions/subjects'
import { getOneStudent } from '../actions/students'

export class StudentPage extends Component {

  componentDidMount() {
    const teacherId = this.props.authentication.user
    const studentId = this.props.match.params.id
    this.props.getSubjects(teacherId)
    this.props.getOneStudent(teacherId, studentId)
  }

  render() {
    const studentId = this.props.match.params.id
    return (
      <Container>
        <Row>
          <h1 id='StudentName'>{this.props.student.first_name} {this.props.student.last_name}</h1>
          <Col >
            <Link to={`/gradebook/2`}>
              <Button className='float-right' id='Back'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back to Students</Button>
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
    student: state.student,
    authentication: state.authentication
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSubjects,
    getOneStudent
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage)
