# hsl-to-hex
Convert HSL colors to RGB colors in hex format. 
Required JavaScript Version: >= ES6

## Install
```sh
npm install --save @stevenx2020/hsl-to-hex
```

## API
```
require('hsl-to-hex') => Function
hsl(hue, saturation, luminosity) => String
```

## Example
```js
var hsl = require('hsl-to-hex');
var hue = 13;
var saturation = 40;
var luminosity = 60;
var hex = hsl(hue, saturation, luminosity);
console.log(hex)  // #70c282
```

## License
ISC