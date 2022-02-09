import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar.jsx';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { Switch } from 'react-router-dom';
import LoginPage from './components/Login/login';
import { initializeApp } from './redux/app-reducer.ts';
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
          <Switch>
            <Route exact path='/' render={WithSuspense(ProfileContainer)}></Route>
            <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}></Route>
            <Route path='/dialogs' render={WithSuspense(DialogsContainer)}></Route>
            <Route path='/users' render={() => < UsersContainer />}></Route>
            <Route path='/login' render={() => < LoginPage />}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inicialization: state.app.inicialization
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
