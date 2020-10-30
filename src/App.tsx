import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Ascreen from './screens/issue'

function App() {
  return (
    <Provider store={store}>
      <Ascreen></Ascreen>
    </Provider>
  );
}

export default App;
