import typescript from 'rollup-plugin-typescript2'
//import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
//import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";

import pkg from './package.json'

export default [
  {

    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      url({ exclude: ['**/*.svg'] }),
      nodeResolve({ jsnext: true, preferBuiltins: true, browser: true }),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'dist'
      }),
      terser()
    ]
  },
  {
    input: 'src/http/index.ts',
    output: [
      {
        dir: 'http',
        format: 'es'
      }
    ],
    plugins: [
      external(),
      nodeResolve({ jsnext: true, preferBuiltins: true, browser: true }),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'http'
      }),
      terser()
    ]
  },
  {
    input: 'src/form/index.ts',
    output: [
      {
        dir: 'form',
        format: 'es'
      },
    ],
    plugins: [
      external(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'form'
      }),
      terser()
    ],
    external: ['rxjs', 'rxjs/operators']
  },
  {
    input: 'src/util/index.ts',
    output: [
      {
        dir: 'util',
        format: 'es'
      },
    ],
    plugins: [
      external(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'util'
      }),
      terser()
    ]
  }

]
