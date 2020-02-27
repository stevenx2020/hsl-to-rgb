const hsl = require('../').hsl2rgbHex;
const test = require('tap').test;

test('pure white', (assert) => {
  const expected = '#ffffff';
  const actual = hsl(0, 100, 100);
  const it = 'max saturation and luminosity should return pure white';
  assert.is(actual, expected, it);
  assert.end();
});

test('medium gray', (assert) => {
  const expected = '#808080';
  const actual = hsl(0, 0, 50);
  const it = '0% saturation, 50% luminosity should be medium gray';
  assert.is(actual, expected, it);
  assert.end();
});

test('hue - red', (assert) => {
  const expected = '#ff0000';
  const actual = hsl(0, 100, 50);
  const it = 'should be red with 0 degree';
  assert.is(actual, expected, it);
  assert.end();
});

test('huse - blue', (assert) => {
  const expected = '#0000ff';
  const actual = hsl(240, 100, 50);
  const it = 'should be blue with 240 degree';
  assert.is(actual, expected, it);
  assert.end();
});

test('hue -cyan', (assert) => {
  const expected = '#00ffff';
  const actual = hsl(180, 100, 50);
  const it = 'should be cyan with 180 degree';
  assert.is(actual, expected, it);
  assert.end();
});

test('degree overflow', (assert) => {
  const expected = hsl(1, 100, 50);
  const actual = hsl(361, 100, 50);
  const it = '361 degree should be the same as 1 degree';
  assert.is(actual, expected, it);
  assert.end();
});

test('degree underflow', (assert) => {
  const expected = hsl(-1, 100, 50);
  const actual = hsl(359, 100, 50);
  const it = '-1 degree should be the same as 359 degree';
  assert.is(actual, expected, it);
  assert.end();
});

test('max constraint', (assert) => {
  const expected = hsl(0, 101, 50);
  const actual = hsl(0, 100, 50);
  const it = '101% should be the same as 100%';
  assert.is(actual, expected, it);
  assert.end();
});

test('min constraint', (assert) => {
  const expected = hsl(0, -1, 50);
  const actual = hsl(0, 0, 50);
  const it = ' -1% should be the same as 0%';
  assert.is(actual, expected, it);
  assert.end();
});
