import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='content'>
        <Route path='/profile' render={() => < Profile />}></Route>
        <Route path='/dialogs' render={() => < DialogsContainer />}></Route>
        <Route path='/users' render={() => < UsersContainer />}></Route>
      </div>
    </div>
  );
}

export default App;
