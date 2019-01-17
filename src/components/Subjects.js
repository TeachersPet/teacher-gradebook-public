import React from 'react'
import { Button, Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostedAssignment from './PostedAssignment'
import { getAssignments } from '../actions/assignments'
import { getOneSubject } from '../actions/subjects'

class SubjectsPage extends React.Component {

  componentDidMount() {
    const teacherId = this.props.authentication.user
    const subjectId = this.props.match.params.id
    this.props.getAssignments(teacherId, subjectId)
    this.props.getOneSubject(teacherId, subjectId)
  }
  
  render() {
    const subjectId = this.props.match.params.id
    return (
      <div>
        <Container>
          <Row>
            <Col sm='12' md={{ size: 6, offset: 3 }}>
              <Link to={`/createassignment/${subjectId}`}>
                <Button id='CreateAssign' size='lg' block><i className='fas fa-folder-plus'></i> Create New Assignment</Button>
              </Link>
            </Col>
            <Col>
            <Link to={`/Gradebook/1`}>
              <Button className='float-right' id='BtnBackStud'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</Button>
              </Link>
            </Col>
          </Row>
        </Container>

        <Container>
          <h1 id='SubjectTitle'>{this.props.subject.subject_name}</h1>
          {this.props.assignments.map(assignment => <PostedAssignment key={assignment.id} {...assignment} subjectId={subjectId} />)}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments,
    subject: state.subject,
    authentication: state.authentication
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAssignments,
    getOneSubject
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPage)
