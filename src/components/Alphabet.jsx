import React from 'react';
import { connect } from 'react-redux';

class Alphabet extends React.Component {
  render () {
    return (
    <div>
      <p>
        <b>Alphabet:</b> (will update automatically)
      </p>
      {this.props.alphabet}
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
