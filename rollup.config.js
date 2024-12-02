// rollup.config.js
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',  // Entry point
  output: [
    {
      file: 'dist/react-package.cjs.js',  // CommonJS build
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/react-package.esm.js',  // ES Module build
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/react-package.umd.js',  // UMD build for browsers
      format: 'umd',
      name: 'ReactPackage',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),  // Exclude React, ReactDOM from the bundle
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    terser(),  // Minify UMD build
  ],
};
