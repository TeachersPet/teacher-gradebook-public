import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { deleteAssignment } from '../actions/assignments'
import { updateAssignment } from '../actions/assignments'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function PostedAssignment(props) {
  return (
    <Card className="border">
      <CardBody className="SubjectCards">
        <CardTitle > <Link to={`/viewassignment/${props.subjectId}/${props.id}`}>{props.assignment_name}</Link> </CardTitle>
        <CardText>
          <Moment format='MM/DD/YY'>{props.date}</Moment>
          
          <span>
            <a onClick={() => props.deleteAssignment(props.teacherId, props.subjectId, props.id)}size="sm" className="btn btn-outline-danger float-right" id="deleteBtn" ><i className="far fa-trash-alt"></i> Delete</a>
          </span>
          <span>
            <a onClick={() => props.updateAssignment(props.teacherId, props.subjectId, props.id)} size="sm" className="btn btn-outline-info float-right" id="editBtn"><i className="fas fa-pencil-alt"></i> Edit</a>
          </span>
        </CardText>
      </CardBody>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteAssignment,
    updateAssignment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostedAssignment)



