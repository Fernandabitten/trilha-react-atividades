import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import BlockFlix from '../src/router/BlockFlix';
import {MyProvider} from './context/context'
import "./index.css";

const temaDaAmericanas = {
  color: "tomato",
};

const temaSubmarino = {
  color: "blue",
};

ReactDOM.render(
  <React.StrictMode>    
      <MyProvider>
          <BlockFlix />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
