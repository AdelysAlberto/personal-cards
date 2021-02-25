import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from './screens/Principal';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className={'container-fluid bg-light'}>
        <Principal />
      </div>
    </Provider>
  );
}

export default App;
