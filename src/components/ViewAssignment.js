import React from 'react';
import { Container, Table, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CreateAssignment from './CreateAssignment';

class ViewAssignment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col><h1>Frog quiz #4</h1> </Col>
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
                        <tr>
                            <td>Zelda  </td>
                            <td>:)</td>
                            <td>master of the frogs!</td>>
                    <td><Button>Edit</Button></td>
                        </tr>
                        <tr>

                            <td>Nap Lajoie</td>
                            <td>:(</td>
                            <td>Overdeveloped sense of frog fairness</td>
                            <td><Button>Edit</Button></td>
                        </tr>
                        <tr>

                            <td>Bobby</td>
                            <td>:|</td>
                            <td>Should have voted for presentations</td>
                            <td><Button>Edit</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}

  render() {
    console.log( this.props.assignments[0]['assignment_name'])
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
  
  
