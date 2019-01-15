import React from 'react';
import { Container, Row, Col, Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function StudentPage() {
  return (
    <Container>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <p className="mb-0">
              <Row className='align-items-center'>
                <Col md='8'>
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Math</strong>
                </button>
                </Col>
                <Col >
                <div>Average Grade: {}</div>
                </Col>
              </Row>
            </p>
          </div>

          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
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
                <tbody>
                  <tr>
                    <td>Math Quiz</td>
                    <td>1</td>
                    <td>Needs improvement</td>
                    <td>
                      <Link to='/createassignment'>
                        <Button>Edit</Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Math Quiz</td>
                    <td>1</td>
                    <td>Needs improvement</td>
                    <td>
                      <Button>Edit</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
