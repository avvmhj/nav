import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ParentComponent from './Component/ParentComponent';
import CounterParent from './Component/CounterParent';
import MessageParent from './Component/MessageParent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ParentComponent/>
    <CounterParent/>
    <MessageParent/>
  </React.StrictMode>
);
