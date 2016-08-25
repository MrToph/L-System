import React from 'react';
import { connect } from 'react-redux';
import LSystemRenderSVG from '../LSystem/LSystemRenderSVG';
import '../css/app.css';

class LSystemRender extends React.Component {
  constructor (props) {
    super(props);
    this.svgRenderer = new LSystemRenderSVG();
  }
  render () {
    return (
    <section id='LSystemRender'>
      <svg ref={ref => this.svgRenderer.setSVG(ref)}>
      </svg>
    </section>
    );
  }

  componentWillReceiveProps (newProps) {
    if (!this.state || this.state.selectedPreset !== newProps.selectedPreset) {
      this.svgRenderer.setDrawingSubsystem(newProps.selectedPreset, newProps.startAngle, newProps.turnAngle);
    }
    if (!this.state || this.state.startAngle !== newProps.startAngle || this.state.turnAngle !== newProps.turnAngle) {
      this.svgRenderer.setAngles(newProps.startAngle, newProps.turnAngle);
    }
    // only draw if angles are valid numbers
    if (!(newProps.startAngle.length === 0 || isNaN(newProps.startAngle) || newProps.turnAngle.length === 0 || isNaN(newProps.turnAngle))) {
      this.svgRenderer.renderString(newProps.output);
    }
    this.setState(newProps);
  }

  shouldComponentUpdate () {
    return false; // we will redraw the svg on our own
  }
}

const mapStateToProps = state => {
  return {
    output: state.output.text,
    selectedPreset: state.presets.selectedPreset,
    startAngle: state.grammar.startAngle,
    turnAngle: state.grammar.turnAngle
  };
};

export default connect(mapStateToProps)(LSystemRender);
