/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-18 16:09:54
 * @LastEditTime: 2022-06-22 00:19:06
 */
const UserService = require("../service/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

class UserController {
    // 用户注册
    async register(ctx, next) {
        // 1. 获取用户提交的数据
        const { username, password } = ctx.request.body;
        // console.log(username, password, "params");

        // 2. 操作数据库
        const res = await UserService.create(username, password);
        // console.log(res, "res");

        // 3. 返回结果
        ctx.body = {
            code: 0,
            data: {
                id: res.id,
                username: res.username,
            },
            message: "用户注册成功!",
        };
    }

    // 用户登录
    async login(ctx, next) {
        const { username } = ctx.request.body;

        // 1. 获取用户信息(在token的payload中, 记录id, username, is_admin)
        try {
            // 从返回结果对象中剔除password属性, 将剩下的属性放到res对象
            const res = await UserService.findOne({ username });
            // 加密到token的数据
            const signData = {
                id: res.id,
                username: res.username,
                isAdmin: res.isAdmin,
            };

            ctx.body = {
                code: 0,
                message: "用户登录成功",
                data: {
                    token: jwt.sign(signData, JWT_SECRET, { expiresIn: "1d" }),
                },
            };
        } catch (err) {
            console.error("用户登录失败", err);
        }
    }

    // 用户列表
    async list(ctx, next) {
        // 1. 解析pageNum和pageSize, 剩余的为查询条件
        const { pageNumber = 1, pageSize = 10, ...condition } = ctx.request.query;
        // 2. 调用数据处理的相关方法
        const res = await UserService.findAll(pageNumber, pageSize, condition);
        // 3. 返回结果
        ctx.body = {
            code: 0,
            message: "获取用户列表成功",
            data: res,
        };
    }

    // 修改用户密码
    async updatePassword(ctx, next) {
        const { id } = ctx.state.user;
        const { newPassword } = ctx.request.body;
        // 2. 调用数据处理的相关方法
        const res = await UserService.updatePassword(id, newPassword);
        // 3. 返回结果
        ctx.body = {
            code: 0,
            message: "获取用户列表成功",
            data: true,
        };
    }

    // 修改用户信息

    // 删除用户
}

module.exports = new UserController();
