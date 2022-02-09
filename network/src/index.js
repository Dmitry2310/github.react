import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';



ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}> 
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>, document.getElementById('root'));

// we may not to use "basename", while we are using HashRouter




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
