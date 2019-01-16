import React from 'react';
import { Container, Table, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Moment from 'react-moment'
import { getOneAssignment } from '../actions/assignments'
import { getOneSubject } from '../actions/subjects'

class ViewAssignment extends React.Component {

  //replace 1 with teacherId
  componentDidMount = () => {
    const subjectId = this.props.match.params.subjectId
    const assignmentId = this.props.match.params.id
    this.props.getOneSubject(1, subjectId)
    this.props.getOneAssignment(1, subjectId, assignmentId)
  }

  render() {
    const assignment = this.props.assignments[0]
    const subjectId = this.props.match.params.subjectId

    return (
      <Container>
        <Row>
          {assignment ? <h1 className='viewAssignmentHeader'>{assignment.assignment_name}</h1> : null}
          <Col><div className='float-right'>
            <Link to={`/subjects/${subjectId}`}><Button id='Back'>{`Back to ${this.props.subject.subject_name}`}</Button></Link></div></Col>
        </Row>

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
                  <tr key={assignment.id}>
                    <td>{asn.first_name + ' ' + asn.last_name}</td>
                    <td>{asn.grade}</td>
                    <td>{asn.comment}</td>
                    <td><Link to='./createassignment'><Button id='Edit'>Edit</Button></Link></td>
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
    students: state.students,
    subject: state.subject,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getOneAssignment,
    getOneSubject
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAssignment)


