/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-18 15:49:08
 * @LastEditTime: 2022-07-28 16:50:26
 */
const path = require("path");
const Koa = require("koa");
const app = new Koa();
const { createDirPath } = require("../utils/index");

// 用于处理请求参数
const KoaBody = require("koa-body");

// 搭建静态服务器
const KoaStatic = require("koa-static");
app.use(KoaStatic(path.join(__dirname, "../../public")));

// 1.引入路由表
const userRouter = require("../routes/user");
const fileRouter = require("../routes/file");
const categoryRouter = require("../routes/category");

// 注册中间件
app.use(
    KoaBody({
        multipart: true, // 开启多文件上传
        formidable: {
            uploadDir: createDirPath(path.join(__dirname, "../../public/upload")), // 设置上传文件的位置
            keepExtensions: true, // 保持文件的后缀
            maxFileSize: 1 * 1024 * 1024, // 限制文件大小为10M。默认20M
            onFileBegin: (a, b) => {
                console.log(a, b);
            },
        },
        parsedMethods: ["POST", "PUT", "PATCH", "DELETE"],
    })
);

// 2. 注册路由
app.use(userRouter.routes());
app.use(fileRouter.routes());
app.use(categoryRouter.routes());

// 错误统一处理
const error = require("./error");
app.on("error", error.handle);

// 错误不明显处理
process.on("unhandledRejection", (reason, p) => {
    console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});

module.exports = app;
