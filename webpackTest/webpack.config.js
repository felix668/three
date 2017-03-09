var webpack=require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/page/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};

// {
//     entry: {
//         page1: "./page1",
//         //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
//         page2: ["./entry1", "./entry2"]
//     },
//     output: {
//         path: "dist/js/page",
//         filename: "[name].bundle.js"
//     }
// }该段代码最终会生成一个 page1.bundle.js 和 page2.bundle.js，并存放到 ./dist/js/page 文件夹下。

// module: {
//         //加载器配置
//         loaders: [
//             //.css 文件使用 style-loader 和 css-loader 来处理
//             { test: /\.css$/, loader: 'style-loader!css-loader' },
//             //.js 文件使用 jsx-loader 来编译处理
//             { test: /\.js$/, loader: 'jsx-loader?harmony' },
//             //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
//             { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
//             //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
//             { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
//         ]
//     }


// resolve: {
//         //查找module的话从这里开始查找
//         root: 'E:/github/flux-example/src', //绝对路径
//         //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
//         extensions: ['', '.js', '.json', '.scss'],
//         //模块别名定义，方便后续直接引用别名，无须多写长长的地址
//         alias: {
//             AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
//             ActionType : 'js/actions/ActionType.js',
//             AppAction : 'js/actions/AppAction.js'
//         }
//     }

//webpack --display-error-details 方便出错时能查阅更详尽的信息（比如 webpack 寻找模块的过程），从而更好定位到问题
//webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包
 
//webpack --watch   //监听变动并自动打包
 
//webpack -p    //压缩混淆脚本，这个非常非常重要！
 
// webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了
// 
// 
// HTML
// <!DOCTYPE html>
// <html>
// <head lang="en">
//   <meta charset="UTF-8">
//   <title>demo</title>
// </head>
// <body>
//   <script src="dist/js/page/common.js"></script>
//   <script src="dist/js/page/index.js"></script>
// </body>
// </html>
// 
// JS  编译前的页面入口文件（index.js）：
// require('../../css/reset.scss'); //加载初始化样式
// require('../../css/allComponent.scss'); //加载组件样式
// var React = require('react');
// var AppWrap = require('../component/AppWrap'); //加载组件
// var createRedux = require('redux').createRedux;
// var Provider = require('redux/react').Provider;
// var stores = require('AppStore');
 
// var redux = createRedux(stores);
 
// var App = React.createClass({
//     render: function() {
//         return (
//             <Provider redux={redux}>
//                 {function() { return <AppWrap />; }}
//             </Provider>
//         );
//     }
// });
 
// React.render(
//     <App />, document.body
// );



























