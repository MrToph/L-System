import AbstractDrawingSubsystem from '../LSystem/AbstractDrawingSubsystem';
import Vector2 from '../utils/Vector2';
import * as d3path from 'd3-path';
import '../css/svg.css'; // need svgBorder class from it

class SimpleTurtleDrawingSubsystem extends AbstractDrawingSubsystem {
  constructor (canvas, width, height, startAngle = 0 , angleTurn = Math.PI / 2) {
    super(canvas, width, height);
    this.startAngle = startAngle;
    this.angleTurn = angleTurn;
    console.log(arguments);
  }

  renderString (s) {
    let strokeLength = 10;
    this.bounds = {minX: 0, maxX: 0, minY: 0, maxY: 0};
    // start from bottom left
    let pos = new Vector2(0, 0);
    const angleTurn = this.angleTurn;
    let angle = this.startAngle; // start looking up
    let path = d3path.path();
    path.moveTo(pos.x, pos.y);
    for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case 'F': {
          angle = (angle + 2 * Math.PI) % (2 * Math.PI);
          let dir = Vector2.fromAngle(angle);
          dir.y = -dir.y; // SVG's y increases down
          pos.add(dir.scale(strokeLength));
          path.lineTo(pos.x, pos.y);
          this.updateBounds(pos);
          break;
        }
        case '+': {
          angle -= angleTurn;
          break;
        }
        case '-': {
          angle += angleTurn;
          break;
        }
      }
    }
    this.canvas.append('path').attr('class', 'path')
      .attr('d', path.toString());
    // transform centers it on width/2, height/2
    // compute needed scale
    let size = new Vector2(this.bounds.maxX - this.bounds.minX, this.bounds.maxY - this.bounds.minY); // half width, half height (middlePoint) of drawing
    let xScale = this.width / size.x;
    let yScale = this.height / size.y;
    let scale = Math.min(xScale, yScale);
    // compute position
    let midPoint = new Vector2(this.bounds.maxX + this.bounds.minX, this.bounds.maxY + this.bounds.minY).scale(0.5);
    let translate = new Vector2(this.width / 2, this.height / 2).subtract(midPoint.scale(scale));
    this.canvas.attr('transform', `translate(${translate.x}, ${translate.y}), scale(${scale})`);
  }

  updateBounds (pos) {
    this.bounds.minX = Math.min(this.bounds.minX, pos.x);
    this.bounds.maxX = Math.max(this.bounds.maxX, pos.x);
    this.bounds.minY = Math.min(this.bounds.minY, pos.y);
    this.bounds.maxY = Math.max(this.bounds.maxY, pos.y);
  }
}

export default SimpleTurtleDrawingSubsystem;
