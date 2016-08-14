import Vector2 from '../utils/Vector2';
import * as d3 from 'd3';
import TestSystem from '../LSystem/AbstractDrawingSubsystem';
import '../css/svg.css';

class LSystemRenderSVG {
  setSVG (svg) {
    this.width = this.height = 1000;
    this.svg = d3.select(svg);
    this.svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);
    this.translate = [0, 0];
    this.scale = 1;
    this.svg.append('rect')
      .attr('class', 'svgBorder')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', this.width)
      .attr('height', this.height);
    let container = this.svg.append('g').attr('class', 'container')
      .attr('transform', 'translate(' + this.translate[0] + ',' + this.translate[1] + '),scale(' + this.scale + ')');
    this.container = container;
    this.drawingCanvas = this.container.append('g').attr('class', 'drawingCanvas');
    console.log('LSystemRenderSVG::setSVG', this.drawingCanvas);
  }

  // a system that takes a string and gives the individual symbols a meaning. Usually a turtle drawing system
  setDrawingSubsystem (subSystemIndex) {
    // order as defined in ../constants/PresetsData.js
    let subSystem;
    switch (subSystemIndex) {
      case 4: {
        subSystem = new TestSystem(this.drawingCanvas, this.width, this.height);
        break;
      }
      default: {
        subSystem = new TestSystem(this.drawingCanvas, this.width, this.height);
      // throw new Error(`LSystemRenderSVG::setDrawingSubsystem: Invalid subSystemIndex ${subSystemIndex}.`)
      }
    }
    this.drawingSystem = subSystem;
    console.log('LSystemRenderSVG::setDrawingSubsystem', subSystemIndex, this.drawingSystem);
  }

  renderString (s) {
    this.drawingCanvas.selectAll('*').remove(); // clear children
    this.drawingSystem.renderString(s);
    console.log('LSystemRenderSVG::renderString', s);
  }
}

export default LSystemRenderSVG;
