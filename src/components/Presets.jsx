import React from 'react';
import { connect } from 'react-redux';
import { SelectField, MenuItem } from 'material-ui';
import { presetSelected } from '../actions';
import PresetsData from '../constants/PresetsData';

class Presets extends React.Component {
  render () {
    return (
      <section id='Presets'>
      <SelectField value={this.props.selectedPreset} floatingLabelText='Presets' onChange={(event, index, value) => this.updateState(value)}>
        {PresetsData.map((x, i) => <MenuItem primaryText={x[0]} key={i} value={i} />
         )}
      </SelectField>
      </section>
    );
  }

  componentDidMount () {
    this.updateState(this.props.selectedPreset);
  }

  updateState (selectedIndex) {
    this.props.dispatchPresetSelected(selectedIndex);
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
      dispatch(presetSelected({selectedPreset, productions: PresetsData[selectedPreset][3], startAngle: PresetsData[selectedPreset][1], turnAngle: PresetsData[selectedPreset][2]}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Presets);
