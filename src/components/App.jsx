import React from 'react';
import Presets from '../components/Presets';
import Content from '../components/Content';
import LSystemRender from '../components/LSystemRender';
import ErrorSnackbar from '../components/ErrorSnackbar';
import { Paper } from 'material-ui';

class App extends React.Component {
  constructor (props) {
    super(props);
    // Content is display:inline-block which is treated as text => to center it we need to set text-align:center
    this.style = {maxWidth: '1240px'};
    this.contentContainerStyle = {textAlign: 'center'};
  }
  render () {
    // to inject material-ui's css (i.e. make it create a div with its inline style and let our components inherit the style) we need to wrap some material ui component
    // around our app, like Paper
    return (
    <section className='App' style={this.style}>
      <Paper>
        <h1>Context-free Lindenmayer System</h1>
        <Presets />
        <section className='ContentContainer' style={this.contentContainerStyle}>
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
