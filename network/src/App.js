import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar.jsx';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/login';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='content'>
        <Route path='/profile/:userId?' render={() => < ProfileContainer />}></Route>
        <Route path='/dialogs' render={() => < DialogsContainer />}></Route>
        <Route path='/users' render={() => < UsersContainer />}></Route>
        <Route path='/login' render={() => < LoginPage />}></Route>
      </div>
    </div>
  );
}

export default App;
