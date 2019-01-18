import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import Moment from 'react-moment'
import { deleteAssignment } from '../actions/assignments'


function PostedAssignment(props) {
  const teacherId = props.authentication.user

  return (
    <Card className='border'>
      <CardBody className='SubjectCards'>
        <CardTitle > <Link to={`/viewassignment/${props.subjectId}/${props.id}`}>{props.assignment_name}</Link> </CardTitle>
        <CardText>
          <Moment format='MM/DD/YY'>{props.date}</Moment>
          
          <span>
            <button onClick={() => props.deleteAssignment(teacherId, props.subjectId, props.id)}size='sm' className='btn btn-outline-danger float-right' id='deleteBtn' ><i className='far fa-trash-alt'></i> Delete</button>
          </span>

          <Link to={`/createassignment/${props.subjectId}/${props.id}`}>
            <button size='sm' className='btn btn-outline-info float-right' id='editBtn'><i className='fas fa-pencil-alt'></i> Edit</button>
          </Link>

        </CardText>
      </CardBody>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteAssignment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostedAssignment)



