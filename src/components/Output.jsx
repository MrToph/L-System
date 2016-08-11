import React from 'react';
import { FloatingActionButton } from 'material-ui';
import { ContentAdd, ContentRemove } from 'material-ui/svg-icons';

class Output extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
    <div id='Output'>
      <h3>Output</h3> Press the buttons to set the number of iterations
      <FloatingActionButton mini>
        <ContentRemove />
      </FloatingActionButton>
      69
      <FloatingActionButton mini>
        <ContentAdd />
      </FloatingActionButton>
    </div>
    );
  }
}

export default Output;
