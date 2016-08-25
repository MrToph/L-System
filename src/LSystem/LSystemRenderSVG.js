import * as d3select from 'd3-selection';
import { getDrawingSubsystem } from '../constants/PresetsData';
import { DEG2RAD } from '../utils/Math';
import '../css/svg.css'; // need svgBorder class from it

class LSystemRenderSVG {
  setSVG (svg) {
    this.margin = 100;
    this.canvasWidth = this.canvasHeight = 1000;
    this.width = this.height = this.canvasWidth + this.margin;
    this.svg = d3select.select(svg);
    this.svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);
    this.translate = [this.margin / 2, this.margin / 2];
    this.scale = 1;
    // this.svg.append('rect')
    //   .attr('class', 'svgBorder')
    //   .attr('x', 0)
    //   .attr('y', 0)
    //   .attr('width', this.width)
    //   .attr('height', this.height);
    let container = this.svg.append('g').attr('class', 'container')
      .attr('transform', 'translate(' + this.translate[0] + ',' + this.translate[1] + '),scale(' + this.scale + ')');
    this.container = container;
    this.drawingCanvas = this.container.append('g').attr('class', 'drawingCanvas');
  }

  // a system that takes a string and gives the individual symbols a meaning. Usually a turtle drawing system
  setDrawingSubsystem (subSystemIndex, startAngleStringDeg, turnAngleStringDeg) {
    // defined in ../constants/PresetsData.js
    let [SubsystemClass, args] = getDrawingSubsystem(subSystemIndex);
    this.drawingSystem = new SubsystemClass(this.drawingCanvas, this.canvasWidth, this.canvasHeight, ...args);
    this.setAngles(startAngleStringDeg, turnAngleStringDeg);
  }

  setAngles (startAngleStringDeg, turnAngleStringDeg) {
    this.drawingSystem.setAngles(parseFloat(startAngleStringDeg) * DEG2RAD, parseFloat(turnAngleStringDeg) * DEG2RAD);
  }

  renderString (s) {
    this.drawingCanvas.attr('transform', ''); // reset transform
    this.drawingCanvas.selectAll('*').remove(); // clear children
    this.drawingSystem.renderString(s);
  }
}

export default LSystemRenderSVG;
