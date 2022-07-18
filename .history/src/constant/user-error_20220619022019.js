/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-18 22:54:09
 * @LastEditTime: 2022-06-19 02:19:24
 */

// 注册参数错误
const REGISTER_PARAMS_ERROR = {
    code: "10001",
    message: "用户名或密码不能为空",
};

// 登录参数错误
const LOGIN_PARAMS_ERROR = {
    code: "10001",
    message: "用户名或密码不能为空",
};

// 注册失败错误
const REGISTER_USER_ERROR = {
    code: "10010",
    message: "注册失败",
};

// 登录失败错误
const LOGIN_USER_ERROR = {
    code: "10020",
    message: "登录失败",
};

// 该用户已存在
const FOUND_USER_ERROR = {
    code: "10003",
    message: "该用户已存在",
};

// 该用户不存在
const NOT_FOUND_USER_ERROR = {
    code: "10003",
    message: "该用户不存在",
};

module.exports = {
    REGISTER_PARAMS_ERROR,
    REGISTER_USER_ERROR,
    LOGIN_PARAMS_ERROR,
    LOGIN_USER_ERROR,
    FOUND_USER_ERROR,
    NOT_FOUND_USER_ERROR,
};
