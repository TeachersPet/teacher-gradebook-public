import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { deleteAssignment } from '../actions/assignments'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function PostedAssignment(props) {
  return (
    <Card className='border'>
      <CardBody className='SubjectCards'>
        <CardTitle > <Link to={`/viewassignment/${props.subjectId}/${props.id}`}>{props.assignment_name}</Link> </CardTitle>
        <CardText>
          <Moment format='MM/DD/YY'>{props.date}</Moment>
          
          {/* Change 1 to teacherId when we have auth */}
          <span>
            <button onClick={() => props.deleteAssignment(1, props.subjectId, props.id)} size="sm" className="btn btn-outline-danger float-right" id="deleteBtn" ><i className="far fa-trash-alt"></i> Delete</button>
          </span>
          <Link to={`/createassignment/${props.subjectId}/${props.id}`}>
            <button size="sm" className="btn btn-outline-info float-right" id="editBtn"><i className="fas fa-pencil-alt"></i> Edit</button>
          </Link>
        </CardText>
      </CardBody>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteAssignment
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostedAssignment)



