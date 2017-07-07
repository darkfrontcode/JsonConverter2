const path              = require('path')
const merge             = require('webpack-merge')
const commom            = require('./common')

module.exports = merge(commom, {

	output: {
        path: path.join(__dirname, '../../build'),
        filename: "[name].js",
        chunkFilename: '[id].chunk.js'
    }

})
