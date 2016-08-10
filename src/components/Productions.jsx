import React from 'react';
import ProductionsText from '../components/ProductionsText';

class Productions extends React.Component {
  render () {
    return (
    <div>
      <h2>Productions</h2>
      <ProductionsText onChange={this.props.onChange} productions={this.props.productions} />
    </div>
    );
  }
}

export default Productions;
