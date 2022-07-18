/*
 * @Descripttion: 用户路由表
 * @Author: Coder-Tao
 * @Date: 2022-06-18 15:41:33
 * @LastEditTime: 2022-06-22 00:41:02
 */
const Router = require("koa-router");
const router = new Router({ prefix: "/user" });

// 用户中间件
const {
    validateUserRegister,
    encodePassword,
    validateUserLogin,
    validateUserUpdatePassword,
} = require("../middleware/user");
// 验证身份中间件
const { validateToken } = require("../middleware/auth");
// 用户控制器
const { register, login, updatePassword, list } = require("../controller/user");

router.post("/register", validateUserRegister, encodePassword, register);
router.post("/login", validateUserLogin, login);
router.post("/updatePassword", validateToken, validateUserUpdatePassword, encodePassword, updatePassword);
router.get("/", validateToken, list);

module.exports = router;
