# three
构建工具的使用
git使用方法
1、全局安装git
npm install git -g
2、安装后可以查看git版本
git --version
3、github账号上新建仓库，获得仓库链接
4、进入本地工程文件例如testgit
cd testgit
5、使用命令
git init
6、将文件加入到缓存里
git add filename
7、提交一个单独文件，前提是我们知道我们只修改了一个文件
git commit -m "firtst commit"
8、将本地的版本库和远端的版本库链接起来，以便上传代码
git remote add origin https://github.com/minchina/testgit.git
9、将版本库与远端对应起来
git push -u origin master
10、更新代码如testgit.c文件更新
git add .
11、将代码增加进缓存
git commit -m "update:code/testgit.c"
12、提交修改后的代码
git push
