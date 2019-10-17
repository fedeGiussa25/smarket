import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from './layout';
import Login from './screens/Login';

/* import { Alert, ErrorBoundary, Routes } from './components';

import { apiSetup } from '~common/config/api';

import { AuthService } from '~common/services';

import './scss/application.scss'; */

class App extends Component {
/*  componentDidMount() {
    setAppTitle();
    apiSetup(this.props.dispatch);
    if (this.props.loading) {
      AuthService.authSetup(this.props.dispatch);
    }
  } */

  render() {
    return (
      <Fragment>
        <NavBar/>
        <Login/>
      </Fragment>
      /* 
      <ErrorBoundary>
        <Alert />
        <Routes />
      </ErrorBoundary>
      */
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool
};

export default App;

/* 
const mapStateToProps = store => ({
  loading: store.auth.initialLoading
});

export default connect(mapStateToProps)(App);
*/