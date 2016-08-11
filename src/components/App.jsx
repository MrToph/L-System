import React from 'react';
import Presets from '../components/Presets';
import Content from '../components/Content';

class App extends React.Component {
  render () {
    return (
    <div>
      <Presets />
      <Content />
    </div>
    );
  }
}

export default App;
