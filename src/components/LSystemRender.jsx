import React from 'react';
import { Paper } from 'material-ui';
import Productions from '../components/Productions';
import Output from '../components/Output';

class LSystemRender extends React.Component {
  constructor (props) {
    super(props);
    this.style = {
      // boxSizing: 'border-box',
      // padding: '20px',
      margin: '5px 10px',
      display: 'inline-block',
      width: '600px',
    // maxWidth: '600px',
    // minWidth: '400px'
    };
  }
  render () {
    return (
    <section id='LSystemRender' style={this.style}>
      <svg
        width="600px"
        height="600px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect x='0' y='0' width='600px' height='600px' fill='none' stroke='red'></rect>
      </svg>
    </section>
    );
  }
}

export default LSystemRender;
