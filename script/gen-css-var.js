import {generate} from '@arco-design/color'

const colorList = {
  red: '#FF5722',
  blue: '#1E9FFF',
  lightblue: '#31BDEC',
  layuigreen: '#16baaa',
  green: '#16b777',
  // green: '#009688',
  // lightgreen: '#5FB878',
  orange: '#FFB800',
  cyan: '#2F4056',
  purple: '#a233c6',
  black: '#2f363c',
  //black: '#393D49',
  // gray: 'FAFAFA',
};

let color = ''
for (let [colorKey,colorVal] of Object.entries(colorList)) {
  generate(colorVal, {dark: false, list: true }).forEach((v, index) => {
    color += `--lay-color-${colorKey}-${index + 1}: ${v};\n`;
  });
}

console.log(color);
