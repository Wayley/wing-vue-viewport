/*
 * @Author: Robben Wadlay
 * @Date: 2023-10-09 17:18:51
 * @Description: rollup config file
 * @LastEditors: Robben Wadlay
 * @LastEditTime: 2023-10-11 11:41:08
 */
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'temp/index.js',
  output: [
    {
      file: 'dist/wing-vue-viewport.js',
      name: 'wing-vue-viewport',
      format: 'umd',
    },
    {
      file: 'dist/wing-vue-viewport.es.js',
      format: 'es',
    },
    {
      file: 'dist/wing-vue-viewport.amd.js',
      format: 'amd',
    },
    {
      file: 'dist/wing-vue-viewport.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [terser()],
};
