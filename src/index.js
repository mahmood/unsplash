import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Random from './components/Random/Random';
import About from './components/About/About';

export const store = configStore();

render (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/random" component={Random} />
      </div>
    </Router>
  </Provider>
  , document.querySelector('#app')
);
