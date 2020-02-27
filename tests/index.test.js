const expect = require('expect');
const hsl = require('../').hsl;

describe('index.js tests', () => {
  it('should be pure white', () => {
    const expected = '#ffffff';
    const actual = hsl(0, 100, 100);
    expect(actual).toBe(expected);
  });

  it('should be medium gray', () => {
    const expected = '#808080';
    const actual = hsl(0, 0, 50);
    expect(actual).toBe(expected);
  });

  it('should be hue - red', () => {
    const expected = '#ff0000';
    const actual = hsl(0, 100, 50);
    expect(actual).toBe(expected);
  });

  it('should be hue - blue', () => {
    const expected = '#0000ff';
    const actual = hsl(240, 100, 50);
    expect(actual).toBe(expected);
  });

  it('should be hue - cyan', () => {
    const expected = '#00ffff';
    const actual = hsl(180, 100, 50);
    expect(actual).toBe(expected);
  });

  it('maxmium overflow', () => {
    const expected = hsl(0, 101, 50);
    const actual = hsl(0, 100, 50);
    expect(actual).toBe(expected);
  });

  it('minimum underflow', () => {
    const expected = hsl(0, -1, 50);
    const actual = hsl(0, 0, 50);
    expect(actual).toBe(expected);
  });
});
