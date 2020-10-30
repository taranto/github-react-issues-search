import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import IssueScreen from './screens/issue'

function App() {
  return (
    <Provider store={store}>
      <IssueScreen></IssueScreen>
    </Provider>
  );
}

export default App;
