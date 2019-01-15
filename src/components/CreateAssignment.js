import React from 'react';
import { Container, FormGroup, Input, Label, Form, FormText, Button, ListGroup, ListGroupItem, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'

class CreateAssignment extends React.Component {
    constructor(props) {
      super(props)
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
           
           
            <FormGroup>
                <Row>
                    
                    <Col><Label for="exampleSelect">Thurmon</Label></Col>
                    <Col>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    </Col>

                    <Col>
                    <Input placeholder='Comments'></Input>
                    </Col>
                </Row>
            </FormGroup>

            <FormGroup>
                <Row>
                    
                    <Col><Label for="exampleSelect">Thurmon</Label></Col>
                    <Col>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    </Col>

                    <Col>
                    <Input placeholder='Comments'></Input>
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                    
                    <Col><Label for="exampleSelect">Thurmon</Label></Col>
                    <Col>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    </Col>

                    <Col>
                    <Input placeholder='Comments'></Input>
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                    
                    <Col><Label for="exampleSelect">Thurmon</Label></Col>
                    <Col>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    </Col>

                    <Col>
                    <Input placeholder='Comments'></Input>
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                    
                    <Col><Label for="exampleSelect">Thurmon</Label></Col>
                    <Col className='grade-input'>
                    <Input  type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    </Col>

                    <Col>
                    <Input placeholder='Comments'></Input>
                    </Col>
                </Row>
            </FormGroup>
            
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
      
      
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateAssignment)
  
    