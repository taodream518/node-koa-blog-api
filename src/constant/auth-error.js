/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-19 02:39:47
 * @LastEditTime: 2022-06-19 03:19:31
 */
// 缺少token参数
const TOKEN_PARAMS_ERROR = {
    code: "11000",
    msg: "缺少token参数",
};

// token非法错误
const TOKEN_ILLEGAL_ERROR = {
    code: "11001",
    msg: "无效的token",
};

// token过期错误
const TOKEN_EXPIRED_ERROR = {
    code: "11002",
    msg: "token已过期",
};

// token过期错误
const TOKEN_UNKNOW_ERROR = {
    code: "11009",
    msg: "未知的token错误",
};


module.exports = {
    TOKEN_PARAMS_ERROR,
    TOKEN_ILLEGAL_ERROR,
    TOKEN_EXPIRED_ERROR,
    TOKEN_UNKNOW_ERROR
};
