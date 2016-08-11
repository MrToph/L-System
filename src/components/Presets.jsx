import React from 'react';
import { connect } from 'react-redux';
import { presetSelected, productionsChanged } from '../actions';
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
    this.updateState(event.target.value);
  }

  updateState (selectedIndex) {
    this.props.dispatchPresetSelected(selectedIndex);
  }

  componentDidMount () {
    this.updateState(this.props.selectedPreset);
  }
}

const mapStateToProps = state => {
  return {
    selectedPreset: state.presets.selectedPreset // as defined in reducers/index.js
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchPresetSelected: (selectedPreset) => {
      dispatch(presetSelected(selectedPreset));
      dispatch(productionsChanged(PresetsData[selectedPreset][1]));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Presets);
