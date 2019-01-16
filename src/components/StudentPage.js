import React, { Component } from 'react';
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SubjectAccordian from './SubjectAccordian'
import { getSubjects } from '../actions/subjects'

export class StudentPage extends Component {

  componentDidMount() {
    this.props.getSubjects()
  }

  render() {
    const studentId = this.props.match.params.id
    return (
      <Container>
        <div className="accordion" id="accordion">
          {this.props.subjects.map ( subject => <SubjectAccordian key={subject.id} {...subject} studentId={studentId}/>)}
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subjects: state.subjects
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSubjects
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage)
