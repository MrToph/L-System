import React from 'react';
import { Paper } from 'material-ui';
import Productions from '../components/Productions';
import Output from '../components/Output';
import '../css/app.css';

class Content extends React.Component {
  render () {
    return (
    <section id='Content'>
      <Paper className='Paper'>
        <Productions />
        <Output />
      </Paper>
    </section>
    );
  }
}

export default Content;
