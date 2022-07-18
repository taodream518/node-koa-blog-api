<!--
 * @Descripttion: 
 * @Author: Coder-Tao
 * @Date: 2022-06-18 15:26:30
 * @LastEditTime: 2022-07-16 00:37:36
-->


#### 搭建静态服务器
1. 安装 `koa-static`
```
npm i koa-static --save
```

2. 引入并使用
```
const KoaStatic = require("koa-static");
app.use(KoaStatic(createDirPath(path.join(__dirname, "../../public/upload"))));
```
