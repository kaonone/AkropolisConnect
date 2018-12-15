import React from 'react';
import { Provider } from 'react-redux';

import initializeCore from './core';

const { MainNavigator, store } = initializeCore();


export default class App extends React.PureComponent {



  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}