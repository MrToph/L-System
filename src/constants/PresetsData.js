import AbstractDrawingSubsystem from '../LSystem/AbstractDrawingSubsystem';
import KochCurve from '../LSystem/KochCurve';
import CantorDust from '../LSystem/CantorDust';

export default [['Hilbert Curve', 'A // first line defines the axiom (start symbols)\nA=−BF+AFA+FB−\nB=+AF−BFB−FA+'],
  ['Peano Curve', 'L // first line defines the axiom (start symbols)\nL=LFRFL-F-RFLFR+F+LFRFL\nR=RFLFR+F+LFRFL-F-RFLFR'],
  ['Koch Curve', 'F // first line defines the axiom (start symbols)\nF = F+F-F-F+F'],
  ['Dragon Curve', 'FX // first line defines the axiom (start symbols)\nX=X+YF+\nY=-FX-Y'],
  ['Cantor Dust', 'A // first line defines the axiom (start symbols)\nA=ABA // production rules are written as X = Y\nB=BBB // production rules are written as X = Y'],
  ['Sierpinski Triangle', 'A // first line defines the axiom (start symbols)\nA=+B-A-B+\nB=-A+B+A-']
];

// the classes used to render an svg image for the individual classes as defined in the array above
export function getDrawingSubsystem (subSystemIndex) {
  let subSystem;
  switch (subSystemIndex) {
    case 0: {
      subSystem = AbstractDrawingSubsystem;
      break;
    }
    case 1: {
      subSystem = AbstractDrawingSubsystem;
      break;
    }
    case 2: {
      subSystem = KochCurve;
      break;
    }
    case 3: {
      subSystem = AbstractDrawingSubsystem;
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
  return subSystem;
};
