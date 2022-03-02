const path = require("path")

// https://webpack.js.org/guides/asset-management/#loading-images


module.exports = {
    // entry :"./calc.js"
    entry : "./src/index.js",
    output : {
        path: path.resolve(__dirname, "build"),
        filename : "bundle.js"
    },
    mode : "development",
    module:{
        rules : [
        {
            test: /\.css$/, use: ["style-loader","css-loader"]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
    ]
    }
}