import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar.jsx';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/login';
import { initializeApp } from './redux/app-reducer.js';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Preloader from './components/common/preloader/Preloader';
import { WithSuspense } from './components/hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    
    if (!this.props.inicialization) { return <Preloader /> }

    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />
        <div className='content'>
          <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}></Route>
          <Route path='/dialogs' render={WithSuspense(DialogsContainer)}></Route>
          <Route path='/users' render={() => < UsersContainer />}></Route>
          <Route path='/login' render={() => < LoginPage />}></Route>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inicialization: state.app.inicialization
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
