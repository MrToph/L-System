import React from 'react';
import Presets from './components/Presets';
import Content from './components/Content';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.updateFromPresets = this.updateFromPresets.bind(this);
    this.updateProductionsText = this.updateProductionsText.bind(this);
    this.state = {
      selectedPreset: 1,
      alphabet: 'A,B,C',
      productions: ''
    };
  }

  updateFromPresets (newSelectedIndex, productionsText) {
    this.setState(Object.assign({}, this.state, {selectedPreset: newSelectedIndex, productions: productionsText}),
      () => console.log('App::updateFromPresets', this.state)); // QUEUES a state update, after done => callback
  }

  updateProductionsText (productionsText) {
    this.setState(Object.assign({}, this.state, {productions: productionsText}));
  }

  render () {
    return (
    <div>
      <Presets onChange={this.updateFromPresets} selectedPreset={this.state.selectedPreset} />
      <Content onChange={this.updateProductionsText} alphabet={this.state.alphabet} productions={this.state.productions} />
    </div>
    );
  }
}

export default App;
