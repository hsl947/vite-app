const path = require('path')

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  port: 666,
  open: true,
  ssr: false
}
