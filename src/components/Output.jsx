import React from 'react';
import { connect } from 'react-redux';
import { FloatingActionButton, TextField } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { numIterationsChanged } from '../actions';

class Output extends React.Component {
  constructor (props) {
    super(props);
    this.buttonStyle = {
      verticalAlign: 'middle',
      margin: 5
    };
    this.onMinusClicked = this.onMinusClicked.bind(this);
    this.onPlusClicked = this.onPlusClicked.bind(this);
  }

  onPlusClicked () {
    this.onNumIterationsChanged(this.props.numIterations + 1);
  }

  onMinusClicked () {
    this.onNumIterationsChanged(this.props.numIterations - 1);
  }

  onNumIterationsChanged (iterations) {
    this.props.fireNumiterationsChanged(iterations);
  }

  render () {
    return (
    <section id='Output'>
      <h2>Output</h2>
      <span style={this.textStyle}>Press the buttons to set the number of iterations:</span>
      <FloatingActionButton
        style={this.buttonStyle}
        mini
        zDepth={1}
        disabled={this.props.numIterations === 0}
        onTouchTap={this.onMinusClicked}>
        <ContentRemove />
      </FloatingActionButton>
      <span>{this.props.numIterations}</span>
      <FloatingActionButton
        style={this.buttonStyle}
        mini
        zDepth={1}
        onTouchTap={this.onPlusClicked}>
        <ContentAdd />
      </FloatingActionButton>
      <TextField
        name='Output'
        hintText='The output of the grammar after the specified number of iterations will be here'
        multiLine
        fullWidth
        readOnly
        rowsMax={5}
        floatingLabelText='Output of the L-System'
        value={this.props.output} />
    </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    numIterations: state.output.numIterations,
    output: state.output.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fireNumiterationsChanged: (value) => {
      dispatch(numIterationsChanged(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Output);
