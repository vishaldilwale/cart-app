import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
       <AppRoutes/>
      </div>
    </Provider>
  );
}

export default App;
