import React from 'react';
import { Container, FormGroup, Input, Label, Form, Button } from 'reactstrap';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getStudents } from '../actions/students'
import { postAssignment } from '../actions/assignments'

import { CreateAssignmentStudent } from './CreateAssignmentStudent';

class CreateAssignment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            date: '',
            grades: []
        }
    }

    componentDidMount() {
        this.props.getStudents()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    handleGradeChange = (id, key, value) => {
        const { grades } = this.state
        const studGradeIdx = grades.findIndex(s => s.id === id)
        
        if (studGradeIdx === -1) {
            this.setState({
                grades: grades.concat({ id, [key]: value })
            })
        } else {
            const newStudGrade = grades[studGradeIdx]
            newStudGrade[key] = value
    
            this.setState({
                grades: [ ...grades.slice(0, studGradeIdx), newStudGrade, ...grades.slice(studGradeIdx + 1) ]
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const subjectId = this.props.location.search.split('=')[1]

        let assignment = {
            assignment_name: this.state.title,
            date: this.state.date,
            students: this.state.grades
        }

        this.props.postAssignment(1, subjectId, assignment )
    }

    render() {
        return (
            <Container>
                <h1 id="NewAssignment">New Assignment</h1><br></br>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title"><h3 id="AssignTitle">Title</h3></Label>
                        <Input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="date"><h3 id="AssignDate">Date</h3></Label>
                        <Input type="date" name="date" id="date" value={this.state.date} onChange={this.handleChange}/>
                    </FormGroup>
                    {this.props.students.map(student => {
                        const studentGrade = this.state.grades.find(s => s.id === student.id)
                        console.log(studentGrade);
                        
                        return <CreateAssignmentStudent {...studentGrade} key={student.id} {...student} handleGradeChange={this.handleGradeChange} />
                    })}

                    <Button className='float-right' id="GradeSubmit">Submit</Button>
                </Form>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        assignments: state.assignments,
        students: state.students,
        grades: state.grades
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getStudents,
        postAssignment
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAssignment)

