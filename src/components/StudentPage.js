import React, { Component } from 'react';
import { Container } from 'reactstrap'
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

    return (
      <Container>
        <h1 id="StudentName">{this.props.student.first_name} {this.props.student.last_name}</h1>
        <div className="accordion" id="accordion">
          {this.props.subjects.map ( subject => <SubjectAccordian key={subject.id} {...subject} studentId={studentId}/>)}
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
