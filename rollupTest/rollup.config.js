export 
default{
	entry:'src/main.js',//入口资源
	format:'amd',//amd模式
	sourceMap:true,//判断原来的文件去哪了，默认生成bundle.js.map
	dest:'build/bundle.js'//输出文件
}
//关键步骤
//全局安装rollup 
//npm install rollup -g
// cd rollupTest
//npm init
//npm install rollup --save
//新建rollup.config.js,并配置入口文件和出口文件
//rollup -c 用配置文件生成，并去除不用的代码

//rollup是js的纯粹打包工具