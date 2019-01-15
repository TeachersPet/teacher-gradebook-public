import React from 'react';
import { Container, Table, FormGroup, Input, Label, Form, FormText, Button, ListGroup, ListGroupItem, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewAssignment)

