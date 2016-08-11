import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';
import { productionsChanged } from '../actions';

class ProductionsText extends React.Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  render () {
    return (
    <TextField
      name='Productions'
      hintText='Enter your grammar for the L-System here'
      multiLine fullWidth
      rows={5}
      floatingLabelText='L-System Grammar Productions'
      onChange={this.onChange}
      value={this.props.productions} />
    );
  }

  onChange (event, value) {
    this.props.fireProductionsChanged(value);
  }
}

const mapStateToProps = state => {
  return {
    productions: state.grammar.productions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fireProductionsChanged: (value) => {
      dispatch(productionsChanged(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductionsText);
