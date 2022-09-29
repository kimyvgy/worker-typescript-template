const { build } = require('esbuild');
const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');

const isProd = process.env.NODE_ENV === 'production';

build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  sourcemap: true,
  minify: isProd,
  outdir: 'build',
  plugins: [
    // issue: ReferenceError: "Buffer" is not defined
    // workaround: Polyfill node module by NodeModulesPolyfillPlugin.
    NodeModulesPolyfillPlugin({
      // buffer: true,
      // os: true,
      // zlib: true,
      // https: true,
      // crypto: true,
    }),
  ],
})
.catch(() => process.exit(1));
