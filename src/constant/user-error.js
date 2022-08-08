/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-18 22:54:09
 * @LastEditTime: 2022-06-22 10:14:46
 */

// 注册参数错误
const REGISTER_PARAMS_ERROR = {
    code: "10001",
    msg: "用户名或密码不能为空",
};

// 登录参数错误
const LOGIN_PARAMS_ERROR = {
    code: "10001",
    msg: "用户名或密码不能为空",
};

// 密码不匹配
const LOGIN_PASSWORD_ERROR = {
    code: "10002",
    msg: "密码错误",
};

// 注册失败错误
const REGISTER_USER_ERROR = {
    code: "10010",
    msg: "注册失败",
};

// 登录失败错误
const LOGIN_USER_ERROR = {
    code: "10020",
    msg: "登录失败",
};

// 该用户已存在
const FOUND_USER_ERROR = {
    code: "10003",
    msg: "该用户已存在",
};

// 该用户不存在
const NOT_FOUND_USER_ERROR = {
    code: "10003",
    msg: "该用户不存在",
};

// 用户修改密码错误
const UPDATE_PASSWORD_PARAMS_ERROR = {
    code: "10006",
    msg: "新密码或确认密码不能为空"
}

const UPDATE_PASSWORD_DIFFERENT_ERROR = {
    code: "10007",
    msg: "新密码和确认密码不匹配"
}

// 修改密码失败
const UPDATE_PASSWORD_ERROR = {
    code: "10008",
    msg: "修改密码失败",
};

module.exports = {
    REGISTER_PARAMS_ERROR,
    REGISTER_USER_ERROR,

    LOGIN_PARAMS_ERROR,
    LOGIN_USER_ERROR,
    LOGIN_PASSWORD_ERROR,

    FOUND_USER_ERROR,
    NOT_FOUND_USER_ERROR,
    
    UPDATE_PASSWORD_PARAMS_ERROR,
    UPDATE_PASSWORD_DIFFERENT_ERROR,
    UPDATE_PASSWORD_ERROR
};
