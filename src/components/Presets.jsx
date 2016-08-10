import React from 'react';
import PresetsData from '../constants/PresetsData';

class Presets extends React.Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  render () {
    return (
    <div>
      Presets:
      <select value={this.props.selectedPreset} onChange={this.onChange}>
        {PresetsData.map((x, i) => <option key={i} value={i}>
                                     {x[0]}
                                   </option>)}
      </select>
    </div>
    );
  }

  onChange (event) {
    console.log('Preset changed', event.target.value, this);
    this.updateState(event.target.value);
  }

  updateState (selectedIndex) {
    this.props.onChange(selectedIndex, PresetsData[selectedIndex][1]);
  }

  componentDidMount () {
    console.log('preset mounted', this.props.selectedPreset);
    this.updateState(this.props.selectedPreset);
  }
}

export default Presets;
