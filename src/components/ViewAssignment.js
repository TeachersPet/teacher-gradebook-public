import React from 'react';
import { Container, Table, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import { getOneAssignment, getAssignments} from '../actions/assignments'
import store from '../store'
import Moment from 'react-moment'

class ViewAssignment extends React.Component {
  constructor(props) {
    super(props);
	}
	componentDidMount = () => {
    this.props.getOneAssignment(1, 3, 1)
    console.log('assignments is an array ',  Array.isArray(this.props.assignments) ) //true

  }

  render() {
	
    return (
    <Container>
      <Row>
      { //dumbest workaround ever
        this.props.assignments.map(asn => {
          if (asn.id===1) 
          return (
            <h1 className='viewAssignmentHeader'>{asn.assignment_name}</h1>
          )
        })
      }

      {/* <h1 className='viewAssignmentHeader'>{this.props.assignments[0].assignment_name}</h1> */}

     
       <Col><div className='float-right'>
       <Link to='/createassignment'><Button>All Assignments</Button></Link></div></Col>
       </Row>
       {/* <h4>{this.props.assignments[0].date}</h4> */}
  
       {
        this.props.assignments.map(asn => {
          if (asn.id===1) 
          return (
            <h4 className='viewAssignmentHeader'><Moment format='MM/DD/YY'>{asn.date}</Moment></h4>
          )
        })
      }

	
      <Table className='AssignmentTable'>
        <thead>
        <tr>
          <th>Student</th>
          <th>Grade</th>
          <th>Comments</th>
          <th></th>
        </tr>
        </thead>


        <tbody>
				 {
					this.props.assignments.map(asn => {
						return (
							<tr>
							<td>{asn.first_name + ' ' + asn.last_name}</td>
							<td>{asn.grade}</td>
							<td>{asn.comment}</td>
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
  
  