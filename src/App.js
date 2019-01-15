import React, { Component } from 'react';
// import './App.css';
import './index.css'
import NavHeader from './components/NavHeader'
import NavFooter from './components/NavFooter';
import LandingPage from './components/LandingPage'
import SubjectsPage from './components/Subjects';
import CreateAssignment from './components/CreateAssignment'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App" >
        <NavHeader />
        <BrowserRouter>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Subjects" component={SubjectsPage} />
          <Route exact path="/CreateAssignment" component={CreateAssignment}/>
          {/* <Route path="/Students" component={StudentsPage} /> */}
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

