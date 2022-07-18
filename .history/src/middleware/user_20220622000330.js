/*
 * @Descripttion: 用户验证器
 * @Author: Coder-Tao
 * @Date: 2022-06-18 22:39:03
 * @LastEditTime: 2022-06-22 00:03:30
 */

const bcrypt = require("bcryptjs");
const ErrorType = require("../constant/user-error");
const UserService = require("../service/user");

class UserValidator {
    // 用户密码加密
    async encodePassword(ctx, next) {
        const { password } = ctx.request.body;
        const salt = bcrypt.genSaltSync(10);
        // hash保存的是 密文
        const hash = bcrypt.hashSync(password, salt);
        ctx.request.body.password = hash;
        await next();
    }

    // 验证用户是否注册 (判断合理性)
    async validateUserRegister(ctx, next) {
        const { username, password } = ctx.request.body;
        try {
            // 1. 参数校验 (验证合法性)
            if (!username || !password) {
                console.error("用户名或密码不能为空", ctx.request.body);
                return ctx.app.emit("error", ErrorType.PARAMS_ERROR, ctx);
            }
            // 2. 验证用户是否存在 (验证合理性)
            const user = await UserService.findOne({ username }); // 有返回对象, 否则返回 null;
            if (user) {
                console.error("该用户已注册", user);
                return ctx.app.emit("error", ErrorType.FOUND_USER_ERROR, ctx);
            }
        } catch (error) {
            console.error("注册时出错", error);
            return ctx.app.emit("error", ErrorType.REGISTER_USER_ERROR, ctx);
        }

        await next();
    }

    // 验证用户登录
    async validateUserLogin(ctx, next) {
        const { username, password } = ctx.request.body;
        try {
            // 1. 参数校验 (合法性)
            if (!username || !password) {
                console.error("用户名或密码不能为空", ctx.request.body);
                return ctx.app.emit("error", ErrorType.REGISTER_PARAMS_ERROR, ctx);
            }

            // 2. 验证用户是否存在 (验证合理性)【不存在: 报错】
            const user = await UserService.findOne({ username });
            if (!user) {
                console.error("用户名不存在", { username });
                return ctx.app.emit("error", ErrorType.NOT_FOUND_USER_ERROR, ctx);
            }

            // 3. 密码是否匹配【不匹配: 报错】
            if (!bcrypt.compareSync(password, user.password)) {
                console.error("密码不匹配", { password });
                return ctx.app.emit("error", ErrorType.LOGIN_PARAMS_ERROR, ctx);
            }
        } catch (error) {
            console.error("用户登录时出错", error);
            return ctx.app.emit("error", ErrorType.LOGIN_USER_ERROR, ctx);
        }

        await next();
    }

    // 验证用户修改密码
    async validateUserUpdatePassword(ctx, next) {
        const { newPassword, confirmPassword } = ctx.request.body;
        try {
            // 1. 参数校验 (合法性)
            if (!newPassword || !confirmPassword) {
                console.error("新密码或确认密码不能为空", ctx.request.body);
                return ctx.app.emit("error", ErrorType.UPDATE_PASSWORD_PARAMS_ERROR, ctx);
            }

            if (newPassword !== confirmPassword) {
                console.error("新密码和确认密码不匹配", ctx.request.body);
                return ctx.app.emit("error", ErrorType.UPDATE_PASSWORD_DIFFERENT_ERROR, ctx);
            }
        } catch (error) {
            console.error("用户修改密码时出错", error);
            return ctx.app.emit("error", ErrorType.UPDATE_PASSWORD_ERROR, ctx);
        }

        await next();
    }
}

module.exports = new UserValidator();
