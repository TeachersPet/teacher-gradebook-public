import React from 'react'
import { Button, Card, CardBody, CardTitle, CardText, Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class SubjectsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Link to='/createassignment'>
                <Button color="primary" size="lg" block>Create New Assignment</Button>
              </Link>
            </Col>
          </Row>
        </Container>

        <Container>
          <Card className="border-dark">
            <CardBody>
              <CardTitle > This Is A Card Title
                      </CardTitle>
              <CardText>
                This is the assignment that you are failing
                          <div>
                  <a size="sm" className="btn btn-outline-danger float-right" id="deleteBtn">Delete</a>
                </div>
                <div>
                  <Link to='/createassignment'>
                    <a size="sm" className="btn btn-outline-info float-right" id="editBtn">Edit</a>
                  </Link>
                </div>

              </CardText>
            </CardBody>
          </Card>
          <Card className="border-dark">
            <CardBody>
              <CardTitle> This Is A Card Title
                      </CardTitle>
              <CardText>
                This is the assignment that you are failing
                          <div>
                  <a size="sm" className="btn btn-outline-danger float-right" id="deleteBtn">Delete</a>
                </div>
                <div>
                  <a size="sm" className="btn btn-outline-info float-right" id="editBtn">Edit</a>
                </div>
              </CardText>
            </CardBody>
          </Card>
          <Card className="border-dark">
            <CardBody>
              <CardTitle > This Is A Card Title
                      </CardTitle>
              <CardText>
                This is the assignment that you are failing
                          <div>
                  <a size="sm" className="btn btn-outline-danger float-right" id="deleteBtn">Delete</a>
                </div>
                <div>
                  <a size="sm" className="btn btn-outline-info float-right" id="editBtn">Edit</a>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({


  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPage)
