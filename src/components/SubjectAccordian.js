import React, { Component } from 'react'
import { Row, Col, Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getOneStudentsAssignments } from '../actions/assignments'

export class StudentAccordian extends Component {

  componentDidMount() {
    this.props.getOneStudentsAssignments(1, this.props.id, this.props.studentId)
  }

  render() {
    const assignments = this.props.assignmentsPerSubject[this.props.id]
    let total
    if(assignments) {
      total = assignments.reduce((acc, assignment) => acc + assignment.grade, 0)
    } 
    return (
      <div className="card">
        <div className="card-header" id={this.props.id}>
          <p className="mb-0">
            <Row className='align-items-center'>
              <Col md='8'>
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#id${this.props.id}`} aria-expanded="true" aria-controls={`id${this.props.id}`}>
                  <strong>{this.props.subject_name}</strong>
                </button>
              </Col>
              <Col >
                <div>Average Grade: {
                  total ?
                    total/assignments.length
                    : 'No Grades'
                }</div>
              </Col>
            </Row>
          </p>
        </div>

        <div id={`id${this.props.id}`} className="collapse" aria-labelledby={this.props.id} data-parent="#accordion">
          <div className="card-body">
            <Table>
              <thead>
                <tr>
                  <th>Assignment Name</th>
                  <th>Grade</th>
                  <th>Comment</th>
                  <th>Edit</th>
                </tr>
              </thead>
              {assignments ?

                assignments.map(assignment => {
                  return (
                    <tbody>
                      <tr>
                        <td>{assignment.assignment_name}</td>
                        <td>{assignment.grade}</td>
                        <td>{assignment.comment}</td>
                        <td>
                          <Link to='/createassignment'>
                            <Button>Edit</Button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  )
                })
                : null
              }
            </Table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assignmentsPerSubject: state.assignmentsPerSubject
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getOneStudentsAssignments
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentAccordian)