module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
  env: {
    production: {
      plugins: [['transform-remove-console', { exclude: ['error'] }]],
    },
  },
}
