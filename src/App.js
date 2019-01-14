import React, { Component } from 'react';
// import './App.css';
import './index.css'
import NavHeader from './components/NavHeader'
import NavFooter from './components/NavFooter';
import LandingPage from './components/LandingPage'
import SubjectsPage from './components/Subjects';
import { Route, Link } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Subjects" component={SubjectsPage} />
          {/* <Route path="/Students" component={StudentsPage} /> */}
        <NavFooter />
      </div>
    );
  }
}

export default App;
