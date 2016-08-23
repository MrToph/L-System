import AbstractDrawingSubsystem from '../LSystem/AbstractDrawingSubsystem';
import TurtleDrawingSubsystem from '../LSystem/TurtleDrawingSubsystem';
import CantorDust from '../LSystem/CantorDust';

// Name, startAngle, turnAngle, ProductionsString
export default [['Hilbert Curve', '0', '90', 'A // first line defines the axiom (start symbols)\nA=-BF+AFA+FB-\nB=+AF-BFB-FA+'],
  ['Peano Curve', '0', '90', 'A // first line defines the axiom (start symbols)\nA=AFBFA-F-BFAFB+F+AFBFA\nB=BFAFB+F+AFBFA-F-BFAFB'],
  ['Koch Snowflake Curve', '180', '60', 'F // first line defines the axiom (start symbols)\nF=F+F--F+F'],
  ['Dragon Curve', '0', '90', 'FX // first line defines the axiom (start symbols)\nX=X+YF+\nY=-FX-Y'],
  ['Cantor Dust', '0', '90', 'A // first line defines the axiom (start symbols)\nA=ABA // production rules are written as X = Y\nB=BBB // production rules are written as X = Y'],
  ['Sierpinski Triangle', '180', '60', 'A // first line defines the axiom (start symbols)\nA=+B-A-B+ // production rules are written as X = Y\nB=-A+B+A- // production rules are written as X = Y'],
  ['Pythagoras Tree', '90', '45', '0 // first line defines the axiom (start symbols)\n1=11 // makes the old line strokes double in size at each iteration\n0=1[+0]-0 // draw line stroke, save position, turn left, draw line stroke, restore position, turn right, draw line stroke'],
  ['Fractal Plant', '65', '25', 'X // first line defines the axiom (start symbols)\nX=F-[[X]+X]+F[+FX]-X\nF=FF']
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
      args.push(['A', 'B']);
      break;
    }
    case 6: {
      subSystem = TurtleDrawingSubsystem;
      args.push(['0', '1']);
      break;
    }
    case 7: {
      subSystem = TurtleDrawingSubsystem;
      break;
    }
    default: {
      subSystem = AbstractDrawingSubsystem;
    }
  }
  return [subSystem, args];
};
