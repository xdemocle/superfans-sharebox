const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  plugins: [
    {
      plugin: reactHotReloadPlugin
    }
  ],
  webpack: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
