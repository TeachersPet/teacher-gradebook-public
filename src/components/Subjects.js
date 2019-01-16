import React from 'react'
import { Button, Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
// import { deleteAssignment } from '../actions/assignments'
// import { updateAssignment } from '../actions/assignments'
import  PostedAssignment  from './PostedAssignment'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAssignments } from '../actions/assignments'
import store from '../store'


class SubjectsPage extends React.Component {
  constructor(props) {
  super(props);
  }

  componentDidMount(){
    const subjectId = this.props.location.search.split('=')[1]
    this.props.getAssignments(1, subjectId)
    //need to replace 1 with teacherId once we are authenticated
    
  } 

  render() {  
    store.subscribe( () => console.log('state changed'))
    console.log(this.props.assignments)  
    const subjectId = this.props.location.search.split('=')[1]
    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Link to={`/createassignment?subjectId=${subjectId}`}>
                <Button id="CreateAssign" size="lg" block><i className="fas fa-folder-plus"></i> Create New Assignment</Button>
              </Link>
            </Col>
          </Row>
        </Container>

        <Container>
             {this.props.assignments.map(assignment => 
              <PostedAssignment 
                key={assignment.id} 
                id={assignment.id}
                assignment_name={assignment.assignment_name}
                date={assignment.date}
              />
             )
            }

                {/* // {...assignment}/>) } */}
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
    // deleteAssignment,
    // updateAssignment,
    getAssignments
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPage)
