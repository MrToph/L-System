import React from 'react';
import { connect } from 'react-redux';
import { productionsChanged } from '../actions';

class ProductionsText extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.attr = {
      style: {
        width: '600px'
      },
      rows: 5
    };
  }
  render () {
    return (
    <textarea {...this.attr} onChange={this.handleChange} value={this.props.productions} />
    );
  }

  handleChange (event) {
    this.props.fireProductionsChanged(event.target.value);
  }
}

const mapStateToProps = state => {
  return {
    productions: state.grammar.productions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fireProductionsChanged: (something) => {
      dispatch(productionsChanged(something));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductionsText);
