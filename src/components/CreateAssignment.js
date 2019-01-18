import React from 'react';
import { Container, FormGroup, Input, Label, Form, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudents } from '../actions/students'
import { postAssignment, updateAssignment, getOneAssignment } from '../actions/assignments'
import { getOneSubject } from '../actions/subjects'
import { CreateAssignmentStudent } from './CreateAssignmentStudent';
import moment from 'moment'

class CreateAssignment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            grades: {},
        }
    }

    componentWillReceiveProps(props) {
        const editingId = props.match.params.editingId

        const unGraded = {}

        props.students.forEach((student) => {
            unGraded[student.id] = { id: student.id, grade: 0, comment: null }
        })

        this.setState({
            grades: unGraded
        })

        if (props.assignments.length && editingId) {
            const studentsObj = {}
            props.assignments.forEach(assignment => {
                studentsObj[assignment.student_id] = { id: assignment.student_id, grade: assignment.grade, comment: assignment.comment }
            })

            this.setState({
                title: props.assignments[0].assignment_name,
                date: moment(props.assignments[0].date).format('YYYY-MM-DD'),
                grades: studentsObj
            })
        }
    }

    componentDidMount() {
        const subjectId = this.props.match.params.subjectId
        const editingId = this.props.match.params.editingId
        const teacherId = this.props.authentication.user
        this.props.getStudents(teacherId)
        this.props.getOneSubject(teacherId, subjectId)
        if (editingId) this.props.getOneAssignment(teacherId, subjectId, editingId)
    }

    componentWillReceiveProps(props) {
        const editingId = props.match.params.editingId
        if (props.assignments.length && editingId) {
            const studentsObj = {}
            props.assignments.forEach(assignment => {
                studentsObj[assignment.student_id] = { id: assignment.student_id, grade: assignment.grade, comment: assignment.comment }
            })

            this.setState({
                title: props.assignments[0].assignment_name,
                date: moment(props.assignments[0].date).format('YYYY-MM-DD'),
                grades: studentsObj
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleStudentChange = (studentId, key, value) => {
        this.setState({
            grades: {
                ...this.state.grades,
                [studentId]: { ...this.state.grades[studentId], id: studentId, [key]: value }
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const subjectId = this.props.match.params.subjectId
        const editingId = this.props.match.params.editingId
        const teacherId = this.props.authentication.user

        let assignment = {
            assignment_name: this.state.title,
            date: this.state.date,
            students: Object.values(this.state.grades)
        }


        editingId ?
            this.props.updateAssignment(teacherId, subjectId, editingId, assignment)
            :
            this.props.postAssignment(teacherId, subjectId, assignment)

        this.props.history.push('/gradebook/1')
    }

    render() {
        const editingId = this.props.match.params.editingId
        const subjectName = this.props.subject.subject_name
        return (
            <Container>
                <Button className='float-right' id='BtnBackStud' onClick={this.props.history.goBack}><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</Button>
                <h1 id='NewAssignment'>{editingId ? `Edit ${subjectName}` : `New ${subjectName}`} Assignment</h1><br></br>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='title'><h3 id='AssignTitle'>Title</h3></Label>
                        <Input type='text' name='title' id='title' value={this.state.title} onChange={this.handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for='date'><h3 id='AssignDate'>Date</h3></Label>
                        <Input type='date' name='date' id='date' value={this.state.date} onChange={this.handleChange} required />
                    </FormGroup>
                    {this.props.students.map(student => {
                        return <CreateAssignmentStudent key={student.id} {...student}
                            handleStudentChange={this.handleStudentChange}
                            grade={this.state.grades[student.id] ? this.state.grades[student.id].grade : 0}
                            comment={this.state.grades[student.id] ? this.state.grades[student.id].comment : ''}
                            studentId={parseInt(this.props.match.params.studentId)}
                        />
                    })
                    }
                    <Button className='float-right' id='GradeSubmit'><i class='fa fa-paper-plane' aria-hidden='true'></i> Submit</Button>
                </Form>
            </Container>
        )

    }
}

const mapStateToProps = (state) => {
    return ({
        assignments: state.assignments,
        students: state.students,
        subject: state.subject,
        authentication: state.authentication
    })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getStudents,
        getOneAssignment,
        postAssignment,
        updateAssignment,
        getOneSubject
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAssignment)

