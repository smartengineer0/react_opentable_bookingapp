import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { render } from 'react-dom';

// Import {history} and store
import { store, history } from './store';

// Import root scene
import App from './scenes/App';

// Import assets
import 'aos/dist/aos.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './global.css';

import * as serviceWorker from './serviceWorker';

render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
      <App />
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
