import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import IssueScreenContainer from './screens/issue'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    document.title = "Facebook / React / Issues"
  }, [])
  return (
    <Provider store={store}>
      <IssueScreenContainer></IssueScreenContainer>
    </Provider>
  );
}

export default App;
