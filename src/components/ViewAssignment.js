import React from 'react';
import { Container, Table, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import { getOneAssignment, getAssignments} from '../actions/assignments'
import store from '../store'

class ViewAssignment extends React.Component {
  constructor(props) {
    super(props);
	}
	componentDidMount = () => {
		this.props.getOneAssignment(1, 3, 1)
  }


  render() {
		
		store.subscribe( () => {
      console.log('store changed!', store.getState())
    })
	
    return (
    <Container>
      <Row>
       <Col><h1>we will do a name later.</h1> </Col>
       <Col><div className='float-right'>
       <Link to='/createassignment'><Button>All Assignments</Button></Link></div></Col>
       </Row>
       <h4>10/12/18</h4>
       
      <Table>
        <thead>
        <tr>
          <th>Student</th>
          <th>Grade</th>
          <th>Comments</th>
        </tr>
        </thead>


        <tbody>
				 {
					this.props.assignments.map(asn => {
						return (
							<tr>
							<td>{asn.first_name} {asn.lastname}</td>
							<td>{asn.grade}</td>
							<td>{asn.comment}</td>>
							<td><Link to='./createassignment'><Button>Edit</Button></Link></td>
							</tr>
						)
					})
				} 
       
        </tbody>
    </Table>
    </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments,
		students: state.students,
		subjects: state.subjects
  }
  }
  
  const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
		getOneAssignment, getAssignments
    
  }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ViewAssignment)
  
  