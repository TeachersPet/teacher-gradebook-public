import React from 'react' 
import { FormGroup, Input, Label, Form, FormText, Button, ListGroup, ListGroupItem, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';


export default function CreateAssignmentStudent({ first_name, last_name }) {
  return (
    <FormGroup>
    <Row>
        <Col><Label for="exampleSelect">{first_name} {last_name}</Label></Col>
        <Col>
            <Input type="select" name="select" id="exampleSelect">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </Input>
        </Col>

        <Col>
            <Input placeholder='Comments'></Input>
        </Col>
    </Row>
</FormGroup>
  )
}