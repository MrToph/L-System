// Implementation of Unity's Vector2 in JavaScript
// See Unity'2 Vector 2 documentation:
// https://docs.unity3d.com/ScriptReference/Vector2.html
class Vector2 {
  static get zero () {
    return new Vector2(0, 0);
  }
  static get one () {
    return new Vector2(1, 1);
  }

  static get left () {
    return new Vector2(-1, 0);
  }

  static get right () {
    return new Vector2(1, 0);
  }

  static get up () {
    return new Vector2(0, 1);
  }

  static get down () {
    return new Vector2(0, -1);
  }

  constructor (x = 0 , y = 0) {
    if (typeof x !== 'number') throw new Error(`Vector2::constructor: ${x} is not a number.`);
    if (typeof y !== 'number') throw new Error(`Vector2::constructor: ${y} is not a number.`);

    this.x = x;
    this.y = y;
  }

  add (v) {
    this.x += v.x;
    this.y += v.y;

    return this;
  }

  subtract (v) {
    this.x -= v.x;
    this.y -= v.y;

    return this;
  }

  divide (value) {
    this.x /= value;
    this.y /= value;

    return this;
  }

  scale (value) {
    this.x *= value;
    this.y *= value;

    return this;
  }

  scaleTo (value) {
    this.scale(value / this.magnitude);
    return this;
  }

  moveTowards (v, amount) {
    var dir = new Vector2(
      v.x - this.x,
      v.y - this.y
    ).scaleTo(amount);
    return this.add(dir);
  }

  normal (v) {
    return new Vector2(-this.y, this.x);
  }

  dot (v) {
    return (this.x * v.x) + (this.y * v.y);
  }

  angle (v) {
    var angle = Math.atan2(v.y - this.y, v.x - this.x) - (Math.PI / 2);
    angle += Math.PI / 2;
    if (angle < 0) angle += Math.PI * 2;
    return angle;
  }

  distance (v) {
    let distX = (v.x - this.x);
    let distY = (v.y - this.y);
    return Math.sqrt(distX * distX + distY * distY);
  }

  distanceSqr (v) {
    let distX = (v.x - this.x);
    let distY = (v.y - this.y);
    return distX * distX + distY * distY;
  }

  lerp (v, t) {
    this.x += (this.x - v.x) * t;
    this.y += (this.y - v.y) * t;
    return this;
  }

  clone () {
    return new Vector2(this.x, this.y);
  }

  toString () {
    return `(${this.x}, ${this.y})`;
  }

  equals (v, threshold = 0) {
    if (Math.abs(this.x - v.x) <= threshold && Math.abs(this.y - v.y) <= threshold) return true;
    return false;
  }

  get normalized () {
    var magnitude = this.magnitude;
    return new Vector2(
      this.x / magnitude,
      this.y / magnitude);
  }

  get magnitude () {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }

  get sqrMagnitude () {
    return this.x * this.x + this.y * this.y;
  }

  get minComponent () {
    return Math.min(this.x, this.y);
  }

  get maxComponent () {
    return Math.min(this.x, this.y);
  }
}

export default Vector2;
