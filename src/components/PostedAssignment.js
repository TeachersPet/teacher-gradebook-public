import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { deleteAssignment } from '../actions/assignments'
// import { prependOnceListener } from 'cluster';  (was causing errors/looks unused--do we need it?)


function PostedAssignment({ assignment_name, date }) {
  return (
    <Card className="border">
      <CardBody className="SubjectCards">
        <CardTitle > <Link to='/viewassignment'> <Moment format='MM/DD/YY'>{date}</Moment> </Link> </CardTitle>
        <CardText>
          {assignment_name}
          <span>
            <a size="sm" className="btn btn-outline-danger float-right" id="deleteBtn" ><i className="far fa-trash-alt"></i> Delete</a>
          </span>
          <span>
            <a size="sm" className="btn btn-outline-info float-right" id="editBtn"><i className="fas fa-pencil-alt"></i> Edit</a>
          </span>
        </CardText>
      </CardBody>
    </Card>
  )
}

export default PostedAssignment


