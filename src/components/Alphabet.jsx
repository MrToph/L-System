import React from 'react';

class Alphabet extends React.Component {
  render () {
    return (
    <div>
      <p><b>Alphabet:</b> (will update automatically)</p>
      {this.props.alphabet}
    </div>
    );
  }
}

export default Alphabet;
