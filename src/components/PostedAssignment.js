import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'


function PostedAssignment({ assignment_name, date }) {
  return (
    <Card className="border">
      <CardBody className="SubjectCards">
        <CardTitle > <Link to='/viewassignment'>{date} </Link> </CardTitle>
        <CardText>
          {assignment_name}
          <div>
            <a size="sm" className="btn btn-outline-danger float-right" id="deleteBtn"><i className="far fa-trash-alt"></i> Delete</a>
          </div>
          <div>
            <a size="sm" className="btn btn-outline-info float-right" id="editBtn"><i className="fas fa-pencil-alt"></i> Edit</a>
          </div>
        </CardText>
      </CardBody>
    </Card>
  )
}

export default PostedAssignment