import React from 'react';
import Productions from '../components/Productions';
import Alphabet from '../components/Alphabet';

class Content extends React.Component {
  render () {
    return (
    <div>
     <Alphabet alphabet={this.props.alphabet} />
     <Productions onChange={this.props.onChange} productions={this.props.productions} />
    </div>
    );
  }
}

export default Content;
