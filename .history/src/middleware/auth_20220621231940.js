/*
 * @Descripttion: 认证
 * @Author: Coder-Tao
 * @Date: 2022-06-19 02:39:11
 * @LastEditTime: 2022-06-21 23:19:24
 */
const jwt = require("jsonwebtoken");
const ErrorType = require("../constant/auth-error");
const { JWT_SECRET } = require("../config");

class AuthValidator {
    async validateToken(ctx, next) {
        const { authorization } = ctx.request.header;
        try {
            // 1. 是否有token
            if (!authorization) {
                console.error("缺少token参数", authorization);
                return ctx.app.emit("error", ErrorType.TOKEN_PARAMS_ERROR, ctx);
            }

            const token = authorization?.replace("Bearer ", "");
            // user中包含了payload的信息(id, user_name, is_admin)
            const user = jwt.verify(token, JWT_SECRET);
            ctx.state.user = user;
        } catch (error) {
            // console.error(err, "err");
            // 不能改判断条件
            if (error.name === "TokenExpiredError") {
                console.error("token已过期", error);
                return ctx.app.emit("error", ErrorType.TOKEN_EXPIRED_ERROR, ctx);
            } else if (error.name === "JsonWebTokenError") {
                console.error("无效的token", error);
                return ctx.app.emit("error", ErrorType.TOKEN_ILLEGAL_ERROR, ctx);
            } else {
                console.error("未知的token错误", error);
                return ctx.app.emit("error", ErrorType.TOKEN_UNKNOW_ERROR, ctx);
            }
        }

        await next();
    }
}

module.exports = new AuthValidator();
