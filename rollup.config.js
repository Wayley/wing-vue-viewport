import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
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
