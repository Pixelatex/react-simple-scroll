module.exports = {
  type: 'web-module',
    polyfill: true,
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSimpleScroll',
        externals: {
            'react': 'React'
        }
    }
  },
    babel: {
        presets:['react','es2015'],
        plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
        ]
    }
}
