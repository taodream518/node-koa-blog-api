/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-24 12:32:53
 * @LastEditTime: 2022-07-16 02:07:43
 */
const path = require("path");

class FileController {
    // 单文件上传
    async single(ctx, next) {
        const { file } = ctx.request.files;
        if (file) {
            const fileInfo = file.filepath.replace(/(.*)\/public/, "");
            const url = ctx.host + fileInfo;
            const [, filePath, fileName] = fileInfo.match(/(.*)\/(.*)/);

            ctx.body = {
                code: 0,
                message: "文件上传成功",
                data: {
                    url,
                    filePath: filePath + "/",
                    fileName,
                },
            };
        }
    }

    // 多文件上传
    async multi(ctx, next) {
        console.log(ctx);
    }
}

module.exports = new FileController();
