/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-20 21:48:27
 * @LastEditTime: 2022-06-20 21:50:58
 */

class Error {
    // 错误处理函数
    handle(err, ctx) {
        let status = 500;
        switch (err.code) {
            case "10001":
                status = 400;
                break;
            case "10002":
                status = 409;
                break;
            default:
                status = 500;
        }
        ctx.status = status;
        ctx.body = err;
        console.log(err);
    }
}

module.exports = new Error();
