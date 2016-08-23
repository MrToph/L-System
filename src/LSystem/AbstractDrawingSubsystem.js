class AbstractDrawingSubsystem {
  constructor (canvas, width, height) {
    if (height === undefined) throw new Error('AbstractDrawingSubsystem::ctor expects 3 arguments. ', arguments);
    this.width = width;
    this.height = height;
    this.canvas = canvas;
    this.startAngle = 0;
    this.turnAngle = 0;
  }

  setAngles (startAngle, turnAngle) {
    this.startAngle = startAngle;
    this.turnAngle = turnAngle;
  }

  // overwrite this function in subclasses
  renderString (s) {
    this.canvas.append('text')
      .text('AbstractDrawingSubsystem as SVG text')
      .attr('text-anchor', 'middle') // horizontal alignment
      .attr('dominant-baseline', 'middle') // vertical alignment
      .attr('font-size', this.width / 50)
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`);
  }
}

export default AbstractDrawingSubsystem;
