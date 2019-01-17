import React, { Component } from 'react';
import './index.css'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import NavHeader from './components/NavHeader'
import NavFooter from './components/NavFooter';
import Login from './components/Login'
import Signup from './components/Signup'
import LandingPage from './components/LandingPage'
import Subjects from './components/Subjects';
import CreateAssignment from './components/CreateAssignment'
import ViewAssignment from './components/ViewAssignment'
import StudentPage from './components/StudentPage'
import AuthenticatedRoute from './components/higherOrderComponents/AuthenticatedRoute'
import { setAuthentication } from './actions/authentication'
import request from './utils/request'

class App extends Component {
  componentDidMount() {
    request('/login')
      .then(response => {
        this.props.setAuthentication(response.data.id)
      })
      .catch(_ =>
        this.props.setAuthentication(null))
  }
  render() {
    return (
      <div className='App Site' >
        <BrowserRouter>
          <div className='Site-content'>
            <NavHeader />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <AuthenticatedRoute exact path="/gradebook/:tab" component={LandingPage} />
              <AuthenticatedRoute exact path="/subjects/:id" component={Subjects} />
              <AuthenticatedRoute exact path="/createAssignment/:subjectId" component={CreateAssignment} />
              <AuthenticatedRoute exact path="/createAssignment/:subjectId/:editingId" component={CreateAssignment} />
              <AuthenticatedRoute exact path="/createAssignment/:subjectId/:editingId/student/:studentId" component={CreateAssignment} />
              <AuthenticatedRoute exact path="/viewassignment/:subjectId/:id" component={ViewAssignment} />
              <AuthenticatedRoute path="/students/:id" component={StudentPage} />
            </Switch>
          </div>
        </BrowserRouter>
        <NavFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    setAuthentication
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)

