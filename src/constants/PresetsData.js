import AbstractDrawingSubsystem from '../LSystem/AbstractDrawingSubsystem';
import SimpleTurtleDrawingSubsystem from '../LSystem/SimpleTurtleDrawingSubsystem';
import CantorDust from '../LSystem/CantorDust';

export default [['Hilbert Curve', 'A // first line defines the axiom (start symbols)\nA=-BF+AFA+FB-\nB=+AF-BFB-FA+'],
  ['Peano Curve', 'A // first line defines the axiom (start symbols)\nA=AFBFA-F-BFAFB+F+AFBFA\nB=BFAFB+F+AFBFA-F-BFAFB'],
  ['Koch Snowflake Curve', 'F // first line defines the axiom (start symbols)\nF=F+F--F+F'],
  ['Dragon Curve', 'FX // first line defines the axiom (start symbols)\nX=X+YF+\nY=-FX-Y'],
  ['Cantor Dust', 'A // first line defines the axiom (start symbols)\nA=ABA // production rules are written as X = Y\nB=BBB // production rules are written as X = Y'],
  ['Sierpinski Triangle', 'A // first line defines the axiom (start symbols)\nA=+B-A-B+\nB=-A+B+A-']
];

// the classes used to render an svg image for the individual classes as defined in the array above
export function getDrawingSubsystem (subSystemIndex) {
  let subSystem;
  let args = [];
  switch (subSystemIndex) {
    case 0: {
      subSystem = SimpleTurtleDrawingSubsystem;
      break;
    }
    case 1: {
      subSystem = SimpleTurtleDrawingSubsystem;
      break;
    }
    case 2: {
      subSystem = SimpleTurtleDrawingSubsystem;
      args.push(Math.PI); // startAngle
      args.push(Math.PI / 3); // turn angle= 60 deg
      break;
    }
    case 3: {
      subSystem = SimpleTurtleDrawingSubsystem;
      break;
    }
    case 4: {
      subSystem = CantorDust;
      break;
    }
    case 5: {
      subSystem = AbstractDrawingSubsystem;
      break;
    }
    default: {
      subSystem = AbstractDrawingSubsystem;
    }
  }
  return [subSystem, args];
};
