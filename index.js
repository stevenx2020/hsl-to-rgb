const converter = require('hsl-to-rgb-for-reals');

var max = (val, n) => val >= n ? n : val;
var min = (val, n) => val <= n ? n : val;
var mod = (val, n) => {
  let v = val;
  while (v < 0) v += n;
  while (v > n) v %= n;

  return v;
};

var hsl2rgbHex = (hue, saturation, luminosity) => {
  const HUE = 360;
  const SAT = 100;
  const LUM = 100;

  // Ensure input values of hue is within 359
  const hValue = mod(hue, HUE);

  // Ensure input values of sturaiton & luminosity are with 100
  const sValue = max(min(saturation, 0), SAT);
  const lValue = max(min(luminosity, 0), LUM);

  const rgb = converter(hValue, sValue / 100.0, lValue / 100.0);

  return '#' + rgb.map(n => (256 + n).toString(16).substr(-2)).join('');
};

module.exports.hsl = hsl2rgbHex;
