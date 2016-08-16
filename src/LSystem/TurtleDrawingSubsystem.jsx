import AbstractDrawingSubsystem from '../LSystem/AbstractDrawingSubsystem';
import Vector2 from '../utils/Vector2';
import * as d3path from 'd3-path';
import '../css/svg.css'; // need svgBorder class from it

class TurtleDrawingSubsystem extends AbstractDrawingSubsystem {
  constructor (canvas, width, height, startAngle = 0 , angleTurn = Math.PI / 2 , drawSymbols = ['F']) {
    super(canvas, width, height);
    this.startAngle = startAngle;
    this.angleTurn = angleTurn;
    this.drawSymbols = drawSymbols; // if turtle encounters one of these symbols, it wil draw forward
  }

  renderString (s) {
    let strokeLength = 10;
    this.bounds = {minX: 0, maxX: 0, minY: 0, maxY: 0};
    const angleTurn = this.angleTurn;
    let angle = this.startAngle;
    // path saves all the points and line strokes
    let path = d3path.path();
    let pos = new Vector2(0, 0);
    path.moveTo(pos.x, pos.y);
    // start with empty stack
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (this.drawSymbols.includes(s[i])) {
        angle = (angle + 2 * Math.PI) % (2 * Math.PI);
        let dir = Vector2.fromAngle(angle);
        dir.y = -dir.y; // SVG's y increases down
        pos.add(dir.scale(strokeLength));
        path.lineTo(pos.x, pos.y);
        this.updateBounds(pos);
      } else {
        switch (s[i]) {
          case '+': { // turn left
            angle -= angleTurn;
            break;
          }
          case '-': { // turn right
            angle += angleTurn;
            break;
          }
          case '[': { // push stack
            stack.push([pos.clone(), angle]);
            break;
          }
          case ']': { // push stack
            if (stack.length > 0) {
              [pos, angle] = stack.pop();
              path.moveTo(pos.x, pos.y);
            }
            break;
          }
        }
      }
    }
    this.canvas.append('path').attr('class', 'path')
      .attr('d', path.toString());
    this.centerPath();
  }

  centerPath () {
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

export default TurtleDrawingSubsystem;
