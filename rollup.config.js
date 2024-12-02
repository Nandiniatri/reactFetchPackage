import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/react-package.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/react-package.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/react-package.umd.js',
      format: 'umd',
      name: 'ReactPackage',
      globals: { react: 'React' }, // Fix यही है
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    terser(),
  ],
  external: ['react'], // React को external रखो
};
