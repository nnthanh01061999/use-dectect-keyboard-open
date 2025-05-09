import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].cjs.js',
        sourcemap: true,
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].esm.mjs',
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extract: 'styles/index.css',
        modules: false,
        minimize: true,
        sourceMap: true,
        autoModules: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist',
        },
        exclude: ['**/stories/**', '**/tests/**'],
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  // Bundle type definitions
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

export default config;
