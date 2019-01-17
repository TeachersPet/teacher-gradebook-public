import React from 'react'
import { Button, Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import PostedAssignment from './PostedAssignment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAssignments } from '../actions/assignments'

class SubjectsPage extends React.Component {

  //need to replace 1 with teacherId once we are authenticated
  componentDidMount() {
    const subjectId = this.props.match.params.id
    this.props.getAssignments(1, subjectId)
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
          </Row>
        </Container>

        <Container>
          {this.props.assignments.map(assignment => <PostedAssignment key={assignment.id} {...assignment} subjectId={subjectId} />)}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAssignments
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPage)
