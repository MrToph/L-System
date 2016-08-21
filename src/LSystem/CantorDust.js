import AbstractDrawingSubsystem from '../LSystem/AbstractDrawingSubsystem';
import Vector2 from '../utils/Vector2';
import '../css/svg.css'; // need svgBorder class from it

class CantorDust extends AbstractDrawingSubsystem {
  renderString (s) {
    let length = this.width / s.length;
    let height = this.height / 2;
    let data = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'A') data.push({start: new Vector2(i * length, height), end: new Vector2((i + 1) * length, height)});
    }
    console.log();
    this.canvas.selectAll('.cantorDustLine').data(data).enter().append('line').attr('class', 'cantorDustLine')
      .attr('x1', d => d.start.x)
      .attr('y1', d => d.start.y)
      .attr('x2', d => d.end.x)
      .attr('y2', d => d.end.y);
  }
}

export default CantorDust;
