import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, post: 'hi', likesCount: 12 },
  { id: 2, post: 'hi, how are u?', likesCount: 9 },
  { id: 3, post: 'It\'s my first progect!', likesCount: 16 }];

  let dialogs = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Viktor' },
    { id: 4, name: 'Sveta' }];

  let messages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'how ar u?' },
    { id: 3, message: 'gav gav' }];

ReactDOM.render(<App posts={posts} messages={messages} dialogs={dialogs}/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
