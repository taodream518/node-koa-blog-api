/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-20 21:48:27
 * @LastEditTime: 2022-07-28 14:59:34
 */

class Error {
    // 错误处理函数
    handle(err, ctx) {
        ctx.body = err;
        console.log(err);
    }
}

module.exports = new Error();
