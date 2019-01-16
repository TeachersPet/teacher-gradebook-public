import React from 'react'
import { FormGroup, Input, Label, Row, Col, Container } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addGrades } from '../actions/grades'


export function CreateAssignmentStudent({ id, first_name, last_name, grade = 0, comment = '', handleGradeChange, handleStudentChange }) {
  return (
    <Container>
    <FormGroup >
      <Row>
        <Col className="StudentName" ><Label id="AssName" for="grade">{first_name} {last_name}</Label></Col>
        <Col>
          <Input type="select" name="grade" id="grade" value={grade} onChange={(e) => handleStudentChange(id, 'grade', e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </Col>

        <Col>
          <Input id="comment" placeholder='Comments' value={comment} onChange={(e) => handleStudentChange(id, 'comment', e.target.value)}></Input>
        </Col>
      </Row>
    </FormGroup>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    grades: state.grades
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addGrades
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAssignmentStudent)

