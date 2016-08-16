import AbstractDrawingSubsystem from '../LSystem/AbstractDrawingSubsystem';
import TurtleDrawingSubsystem from '../LSystem/TurtleDrawingSubsystem';
import CantorDust from '../LSystem/CantorDust';
import { DEG2RAD } from '../utils/Math';

export default [['Hilbert Curve', 'A // first line defines the axiom (start symbols)\nA=-BF+AFA+FB-\nB=+AF-BFB-FA+'],
  ['Peano Curve', 'A // first line defines the axiom (start symbols)\nA=AFBFA-F-BFAFB+F+AFBFA\nB=BFAFB+F+AFBFA-F-BFAFB'],
  ['Koch Snowflake Curve', 'F // first line defines the axiom (start symbols)\nF=F+F--F+F'],
  ['Dragon Curve', 'FX // first line defines the axiom (start symbols)\nX=X+YF+\nY=-FX-Y'],
  ['Cantor Dust', 'A // first line defines the axiom (start symbols)\nA=ABA // production rules are written as X = Y\nB=BBB // production rules are written as X = Y'],
  ['Sierpinski Triangle', 'A // first line defines the axiom (start symbols)\nA=+B-A-B+ // production rules are written as X = Y\nB=-A+B+A- // production rules are written as X = Y'],
  ['Pythagoras Tree', '0 // first line defines the axiom (start symbols)\n1=11 // makes the line strokes shrink by half a size at each generation\n0=1[+0]-0 // draw line stroke, save position, turn left, draw line stroke, restore position, turn right, draw line stroke'],
  ['Fractal Plant', 'X // first line defines the axiom (start symbols)\nX=F-[[X]+X]+F[+FX]-X\nF=FF'],
];

// the classes used to render an svg image for the individual classes as defined in the array above
export function getDrawingSubsystem (subSystemIndex) {
  let subSystem;
  let args = [];
  switch (subSystemIndex) {
    case 0: {
      subSystem = TurtleDrawingSubsystem;
      break;
    }
    case 1: {
      subSystem = TurtleDrawingSubsystem;
      break;
    }
    case 2: {
      subSystem = TurtleDrawingSubsystem;
      args.push(Math.PI); // startAngle = left
      args.push(Math.PI / 3); // turn angle= 60 deg
      break;
    }
    case 3: {
      subSystem = TurtleDrawingSubsystem;
      break;
    }
    case 4: {
      subSystem = CantorDust;
      break;
    }
    case 5: {
      subSystem = TurtleDrawingSubsystem;
      args.push(Math.PI); // startAngle = left
      args.push(Math.PI / 3); // turn angle = 60 deg
      args.push(['A', 'B']);
      break;
    }
    case 6: {
      subSystem = TurtleDrawingSubsystem;
      args.push(Math.PI / 2); // startAngle = top
      args.push(Math.PI / 4); // turn angle = 60 deg
      args.push(['0', '1']);
      break;
    }
    case 7: {
      subSystem = TurtleDrawingSubsystem;
      args.push(65 * DEG2RAD); // startAngle
      args.push(25 * DEG2RAD); // turn angle
      break;
    }
    default: {
      subSystem = AbstractDrawingSubsystem;
    }
  }
  return [subSystem, args];
};
