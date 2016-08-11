import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from './store';

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, document.getElementById('app'));
