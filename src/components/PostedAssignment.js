import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

// import { prependOnceListener } from 'cluster';  (was causing errors/looks unused--do we need it?)


function PostedAssignment(props) {
  console.log(JSON.stringify(props))
  console.log(`assignment name: ${props.assignment_name}, ID is ${props.id}`)
  return (
    <Card className="border">
      <CardBody className="SubjectCards">
        <CardTitle > <Link to='/viewassignment'>{props.date} </Link> </CardTitle>
        <CardText>
          {props.assignment_name} 
          <span>
            <a onClick={() => props.deleteAssignment(1,3, props.id)}size="sm" className="btn btn-outline-danger float-right" id="deleteBtn" ><i className="far fa-trash-alt"></i> Delete</a>
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




// function PostedAssignment({ assignment_name, date }) {


