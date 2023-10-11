/*
 * @Author: Robben Wadlay
 * @Date: 2023-10-09 17:18:51
 * @Description: rollup config file for dts
 * @LastEditors: Robben Wadlay
 * @LastEditTime: 2023-10-10 17:49:26
 */
import { dts } from 'rollup-plugin-dts';
import { name } from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [{ file: `dist/${name}.d.ts`, format: 'es' }],
    plugins: [dts()],
  },
];
