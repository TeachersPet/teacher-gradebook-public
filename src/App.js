import React, { Component } from 'react';
// import './App.css';
import './index.css'
import NavHeader from './components/NavHeader'
import NavFooter from './components/NavFooter';
import LandingPage from './components/LandingPage'
import SubjectsPage from './components/Subjects';
import ViewAssignment from './components/ViewAssignment'
import CreateAssignment from './components/CreateAssignment'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {connect} from 'react-redux'  
import { bindActionCreators} from 'redux'


  
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Router>
          <div>
          <Route exact path="/Subjects" component={SubjectsPage} />
          <Route exact path="/CreateAssignment" component={CreateAssignment}/>
          <Route exact path="/viewassignment" component={ViewAssignment}/>
          <Route exact path="/" component={LandingPage} />
          
          {/* <Route path="/Students" component={StudentsPage} /> */}
          </div>
        </Router>
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

