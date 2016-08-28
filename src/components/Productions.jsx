import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';
import { productionsChanged, anglesChanged } from '../actions';
import '../css/app.css';

class Productions extends React.Component {
  constructor (props) {
    super(props);
    this.onProductionsChange = this.onProductionsChange.bind(this);
    this.onAnglesChange = this.onAnglesChange.bind(this);
  }

  onProductionsChange (event, value) {
    this.props.fireProductionsChanged(value);
  }

  onAnglesChange (event, value) {
    let obj = {startAngle: this.props.startAngle, turnAngle: this.props.turnAngle};
    if (event.target.name === 'turnAngle') {
      obj.turnAngle = value;
    } else {
      obj.startAngle = value;
    }
    this.props.fireAnglesChanged(obj);
  }

  render () {
    return (
    <section id='Productions'>
      <h2>Productions</h2>
      <TextField
        name='Productions'
        hintText='Enter your grammar for the L-System here'
        multiLine
        fullWidth
        rows={5}
        floatingLabelText='L-System Grammar Productions'
        onChange={this.onProductionsChange}
        value={this.props.productions} />
        <div className='flexContainerHori'>
      <span className='txtAngle'><TextField
                                   style={{width: '100%'}}
                                   name='startAngle'
                                   hintText='Start Angle (deg)'
                                   floatingLabelText='Start Angle'
                                   onChange={this.onAnglesChange}
                                   value={this.props.startAngle} /></span>
      <span className='txtAngle'><TextField
                                   style={{width: '100%'}}
                                   name='turnAngle'
                                   hintText='Turn Angle (deg)'
                                   floatingLabelText='Turn Angle'
                                   onChange={this.onAnglesChange}
                                   value={this.props.turnAngle} /></span></div>
    </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    productions: state.grammar.productions,
    startAngle: state.grammar.startAngle,
    turnAngle: state.grammar.turnAngle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fireProductionsChanged: (value) => {
      dispatch(productionsChanged(value));
    },
    fireAnglesChanged: (value) => {
      dispatch(anglesChanged(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Productions);
