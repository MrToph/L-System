import React from 'react';
import Presets from '../components/Presets';
import Content from '../components/Content';
import LSystemRender from '../components/LSystemRender';
import ErrorSnackbar from '../components/ErrorSnackbar';
import { Paper } from 'material-ui';
import '../css/app.css';

class App extends React.Component {
  render () {
    // to inject material-ui's css (i.e. make it create a div with its inline style and let our components inherit the style) we need to wrap some material ui component
    // around our app, like Paper
    return (
    <section id='App' style={this.style}>
      <Paper className='Paper'>
        <h1>Context-free Lindenmayer System</h1>
        <Presets />
        <section id='mainContent'>
          <Content />
          <LSystemRender />
        </section>
        <ErrorSnackbar />
      </Paper>
    </section>
    );
  }
}

export default App;
