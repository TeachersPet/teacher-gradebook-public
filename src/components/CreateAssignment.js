import React from 'react';
import { Container, FormGroup, Input, Label, Form, Button } from 'reactstrap';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getStudents } from '../actions/students'
import CreateAssignmentStudent from './CreateAssignmentStudent';

class CreateAssignment extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getStudents()
    }

    render() {
        return (
            <Container>
                <h1>New Assignment:</h1><br></br>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">{this.props.name}</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Description</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                        {this.props.students.map( student => <CreateAssignmentStudent key={student.id} {...student} />)}

                    <Button className='float-right'>Submit</Button>
                </Form>
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
        getStudents
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAssignment)

