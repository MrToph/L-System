import React from 'react';
import { Field, TextField } from 'material-ui';
import { connect } from 'react-redux';

class Alphabet extends React.Component {
  render () {
    return (
    <div>
      <h3>Alphabet</h3>
      <p>
        {this.props.alphabet}
      </p>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alphabet: state.grammar.alphabet // as defined in reducers/index.js
  };
};

export default connect(mapStateToProps)(Alphabet);
