import React from 'react';

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
    console.log('Productions::handleChange', event.target.value);
    this.props.onChange(event.target.value);
  }
}

export default ProductionsText;
