import React from 'react';
import { Paper, Divider } from 'material-ui';
import Productions from '../components/Productions';
import Alphabet from '../components/Alphabet';
import Output from '../components/Output';

class Content extends React.Component {
  constructor (props) {
    super(props);
    this.style = {
      maxWidth: '600px'
    };
  }
  render () {
    return (
    <div id='Content' style={this.style}>
      <Paper style={{padding: 20}}>
        <Productions />
        <Alphabet />
        <Output />
      </Paper>
    </div>
    );
  }
}

export default Content;
