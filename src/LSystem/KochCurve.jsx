import AbstractDrawingSubsystem from '../LSystem/AbstractDrawingSubsystem';
import Vector2 from '../utils/Vector2';
import * as d3path from 'd3-path';
import '../css/svg.css'; // need svgBorder class from it

class KochCurve extends AbstractDrawingSubsystem {
  // overwrite this function in subclasses
  renderString (s, iterations) {
    let numStrokesHorizontal = Math.pow(3, iterations); // KochCurve's length is 3^iterations and its height is 3^iterations/2 - 1
    let numStrokesVertical = Math.floor(numStrokesHorizontal / 2);
    let strokeLength = this.width / numStrokesHorizontal;
    // start from bottom left
    let startingHeight = this.height - (this.height - numStrokesVertical * strokeLength) / 2;
    let pos = new Vector2(0, startingHeight);
    const angleTurn = Math.PI / 2;
    let angle = 0; // start looking to the right
    let path = d3path.path();
    path.moveTo(pos.x, pos.y);
    for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case 'F': {
          angle = (angle + 2 * Math.PI) % (2 * Math.PI);
          let dir = Vector2.fromAngle(angle);
          pos.add(dir.scale(strokeLength));
          path.lineTo(pos.x, pos.y);
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
    this.canvas.attr('width', '100%')
      .attr('height', '100%');
  }
}

export default KochCurve;
