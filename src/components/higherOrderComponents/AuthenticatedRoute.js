import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

const AuthenticatedRoute = props => {
    const {
    authentication: {
      pending,
      user
    },
    path,
    component
  } = props

  if(pending && !user){
    return <div>Loading...</div>
  }
  else if(user) {
    return <Route path={path} component={component} /> 
  }
  else {
    return <Redirect to='/' />
  }
}

const mapStateToProps = state => ({ 
  authentication: state.authentication
})

export default connect(mapStateToProps)(AuthenticatedRoute)