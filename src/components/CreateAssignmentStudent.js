import React from 'react'
import { FormGroup, Input, Label, Row, Col, Container } from 'reactstrap';

export function CreateAssignmentStudent({ id, first_name, last_name, grade = 0, comment = '', handleStudentChange, studentId }) {
  return (

    <Container>
      <FormGroup >
        <Row>
          <Col md='2' id='createStudent' className='StudentName' ><Label id={id === studentId ? 'Highlighted' : 'AssName'} for='grade'>{first_name} {last_name}</Label></Col>
          <Col md='1' id='createStudent'>
            <Input type='select' name='grade' id='grade' value={grade} onChange={(e) => handleStudentChange(id, 'grade', e.target.value)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Input>
          </Col>

          <Col md='9' id='createStudent'>
            <Input autoFocus={id === studentId} id='comment' placeholder='Comments' value={comment} onChange={(e) => handleStudentChange(id, 'comment', e.target.value)}></Input>
          </Col>
        </Row>
      </FormGroup>
    </Container>

  )
}

