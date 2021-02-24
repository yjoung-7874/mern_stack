import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import store, {history} from './store'
import MyRouter from './routes/Router'

// bootstrap : CSS framework
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MyRouter />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
