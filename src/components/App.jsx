import React from 'react';
import Presets from '../components/Presets';
import Content from '../components/Content';
import ErrorSnackbar from '../components/ErrorSnackbar';

class App extends React.Component {
  render () {
    return (
    <div className='App'>
      <h1>Context-free Lindenmayer System</h1>
      <Presets />
      <Content />
      <ErrorSnackbar />
    </div>
    );
  }
}

export default App;
