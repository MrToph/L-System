class LSystem {
  constructor () {
    this.prodDelimiter = '=';
    this.commentRegex = new RegExp('(.*?)(//|$)'); // match anything lazy (as few times as possible) up to // comment or end of string
    this.productionRegex = new RegExp(`^([^${this.prodDelimiter}])${this.prodDelimiter}([^${this.prodDelimiter}]+)$`); // match start character, then one character that is not the delimiter
  }

  setProductions (productionsText) {
    if (productionsText !== undefined) this.productionsText = productionsText;
    else this.productionsText = '';
    this.parseProductions();
  }

  parseProductions (productionsText) {
    if (productionsText !== undefined) this.productionsText = productionsText; // otherwise work with 'old' this.productionsText
    this.productions = new Map();
    this.axiom = '';
    let lines = this.productionsText.split('\n');
    for (let i = 0; i < lines.length; i++) {
      // read everything until the end of the first // comment
      let match = this.commentRegex.exec(lines[i]);
      if (match) {
        lines[i] = match[1].replace(/\s/g, ''); // remove whitespace characters
      }
    }
    lines = lines.filter(x => x !== '');
    // do we have a start symbol(s)?
    if (lines.length === 0 || lines[0].includes(this.prodDelimiter)) {
      throw new Error('ParseError: No axiom (start symbol) defined in first line.');
    } else {
      this.axiom = lines[0];
    }
    // parse the productions for the following lines
    for (var i = 1; i < lines.length; i++) {
      let match = this.productionRegex.exec(lines[i]);
      if (match) {
        let X = match[1];
        let Y = match[2];
        if (this.productions.has(X)) {
          let rule = this.getRuleAsString(X);
          throw new Error(`ParseError: Two productions for symbol "${X}". Each symbol may only have at most one production rule. ("${rule}", "${lines[i]}")`);
        }
        this.productions.set(X, Y);
      } else {
        throw new Error(`ParseError: Invalid production: "${lines[i]}" Make sure your production is of the form: "X ${this.prodDelimiter} Y", s.t. X and Y do not contain "${this.prodDelimiter}" and X is a single character.`);
      }
    }
    return [...this.productions.values()].join('\n');
  }

  getRuleAsString (symbol) {
    return symbol + this.prodDelimiter + this.productions.get(symbol);
  }

  iterate (numIterations) {
    let result = this.axiom;
    for (let i = 0; i < numIterations; i++) {
      result = result.split('').reduce((a, x) => a + (this.productions.has(x) ? this.productions.get(x) : x), '');
    }
    return result;
  }
}

export default LSystem;
