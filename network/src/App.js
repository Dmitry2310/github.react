import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='content'>
          <Route path='/profile' render={ () => < Profile posts={props.posts}/>}></Route>
          <Route path='/dialogs' render={ () => < Dialogs messages={props.messages} dialogs={props.dialogs}/>}></Route>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
