import React from 'react';
import { Container, Table, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Moment from 'react-moment'
import { getOneAssignment } from '../actions/assignments'
import { getOneSubject } from '../actions/subjects'

class ViewAssignment extends React.Component {

  componentDidMount = () => {
    const teacherId = this.props.authentication.user
    const subjectId = this.props.match.params.subjectId
    const assignmentId = this.props.match.params.id
    this.props.getOneSubject(teacherId, subjectId)
    this.props.getOneAssignment(teacherId, subjectId, assignmentId)
  }

  render() {
    const assignment = this.props.assignments[0]
    const subjectId = this.props.match.params.subjectId

    return (
      <Container>
        {assignment ?
          <Row>
            <h1 className='viewAssignmentHeader'>{assignment.assignment_name}</h1>}
          <Col>
              <div className='float-right'>
                <Row>
                  <Link to={`/createassignment/${subjectId}/${assignment.assignment_id}`}><Button id='EditAsn'><i class="fa fa-pencil" aria-hidden="true"></i> Edit Assignment</Button></Link>
                  <Link to={`/subjects/${subjectId}`}><Button id='Back'><i class="fa fa-arrow-left" aria-hidden="true"></i> {`Back to ${this.props.subject.subject_name}`}</Button></Link>
                </Row>
              </div>
            </Col>
          </Row>
          :
          <Row>

            <h2 className='viewAssignmentHeader'>Assignment Ungraded</h2>
            <Col>
              <div className='float-right'>
                <Link to={`/subjects/${subjectId}`}><Button id='Back'><i class="fa fa-arrow-left" aria-hidden="true"></i> {`Back to ${this.props.subject.subject_name}`}</Button></Link>
              </div>
            </Col>
          </Row>
        }

        {assignment ? <h4 className='viewAssignmentHeader'><Moment format='MM/DD/YY'>{assignment.date}</Moment></h4> : null}

        <Table striped className='AssignmentTable'>
          <thead>
            <tr>
              <th>Student</th>
              <th>Grade</th>
              <th>Comments</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {

              this.props.assignments.map(asn => {
                return (
                  <tr key={asn.assignment_id}>
                    <td>{asn.first_name + ' ' + asn.last_name}</td>
                    <td>{asn.grade}</td>

                    <td>{asn.comment}</td>
                    <td><Link to={`/createassignment/${subjectId}/${asn.assignment_id}/student/${asn.student_id}`}><Button id='Edit'><i class="fa fa-pencil" aria-hidden="true"></i> Edit</Button></Link></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Container>
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
    getOneAssignment,
    getOneSubject
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAssignment)


