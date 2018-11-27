import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './common/store/configureStore'
import Main from './screens/Main/index';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Main />
      </Provider>
    );
  }
}

export default App;