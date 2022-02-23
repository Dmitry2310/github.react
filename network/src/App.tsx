import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { UsersPage } from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { Switch } from 'react-router-dom';
import { LoginPage } from './components/Login/login';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Preloader from './components/common/preloader/Preloader';
import { WithSuspense } from './components/hoc/withSuspense';
import { AppStateType } from './redux/redux-store';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
  initializeApp: () => void
}
type PropsType = MapPropsType & MapDispatchPropsType

const SuspendedDialogsContainer = WithSuspense(DialogsContainer);
const SuspendedConteinerProfile = WithSuspense(ProfileContainer);

class App extends React.Component<PropsType> {
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
            <Route exact path='/' render={() => WithSuspense(ProfileContainer)}></Route>
            <Route path='/profile/:userId?' render={() => <SuspendedConteinerProfile />}></Route>
            <Route path='/dialogs' render={() => <SuspendedDialogsContainer />}></Route>
            <Route path='/users' render={() => < UsersPage />}></Route>
            <Route path='/login' render={() => < LoginPage />}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  inicialization: state.app.inicialization
})

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App);
