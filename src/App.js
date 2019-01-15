import React, { Component } from 'react';
// import './App.css';
import './index.css'
import NavHeader from './components/NavHeader'
import NavFooter from './components/NavFooter';
import Login from './components/Login'
import Signup from './components/Signup'
import LandingPage from './components/LandingPage'
import Subjects from './components/Subjects';
import CreateAssignment from './components/CreateAssignment'
import StudentPage from './components/StudentPage'
import { Route, BrowserRouter } from 'react-router-dom'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class App extends Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <div>
          <NavHeader />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/Gradebook" component={LandingPage} />
            <Route exact path="/Subjects" component={Subjects} />
            <Route exact path="/CreateAssignment" component={CreateAssignment} />
            <Route path="/Students" component={StudentPage} />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({


  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

