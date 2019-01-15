import React from 'react'
import { Button, Card, CardBody, CardTitle, CardText, Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAssignments } from '../actions/assignments'


class SubjectsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAssignments()
  }

  render() {
    console.log(this.props.assignments)
    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Link to='/createassignment'>
                <Button id="CreateAssign" size="lg" block><i class="fas fa-folder-plus"></i> Create New Assignment</Button>
              </Link>
            </Col>
          </Row>
        </Container>

        <Container>
          <Card className="border">
            <CardBody className="SubjectCards">
              <CardTitle > <Link to='/viewassignment'>This Is A Card Title </Link> </CardTitle> 
                <CardText>
                   This is the assignment that you are failing
                    <div>
                      <a size="sm" className="btn btn-outline-danger float-right" id="deleteBtn"><i class="far fa-trash-alt"></i> Delete</a>
                    </div>
                    <div>
                      <Link to='/createassignment'>
                      
                        <a size="sm" className="btn btn-outline-info float-right" id="editBtn"><i class="fas fa-pencil-alt"></i> Edit</a>
                      </Link>
                    </div>

              </CardText>
            </CardBody>
          </Card>
          <Card className="border">
            <CardBody className="SubjectCards">
              <CardTitle> <Link to='/viewassignment'> This Is A Card Title </Link> </CardTitle>
                <CardText>
                  This is the assignment that you are failing
                <div>
                  <a size="sm" className="btn btn-outline-danger float-right" id="deleteBtn"><i class="far fa-trash-alt"></i>  Delete</a>
                </div>
                <div>
                  <a size="sm" className="btn btn-outline-info float-right" id="editBtn"><i class="fas fa-pencil-alt"></i> Edit</a>
                </div>
              </CardText>
            </CardBody>
          </Card>
          <Card className="border">
            <CardBody className="SubjectCards">
              <CardTitle > <Link to='/viewassignment'> This Is A Card Title </Link> </CardTitle>
              <CardText>
                This is the assignment that you are failing
                          <div>
                  <a size="sm" className="btn btn-outline-danger float-right" id="deleteBtn"><i class="far fa-trash-alt"></i> Delete</a>
                </div>
                <div>
                  <a size="sm" className="btn btn-outline-info float-right" id="editBtn"><i class="fas fa-pencil-alt"></i> Edit</a>
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
    assignments: state.assignments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAssignments
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPage)
