/*
 * @Descripttion: 用户路由表
 * @Author: Coder-Tao
 * @Date: 2022-06-18 15:41:33
 * @LastEditTime: 2022-06-22 09:25:20
 */
const Router = require("koa-router");
// 中间件引入
const {
    validateUserRegister,
    encodePassword,
    validateUserLogin,
    validateUserUpdatePassword,
} = require("../middleware/user");
const { validateToken } = require("../middleware/auth");
// 用户控制器
const { register, login, updatePassword, list } = require("../controller/user");

const router = new Router({ prefix: "/user" });
router.post("/register", validateUserRegister, encodePassword, register);
router.post("/login", validateUserLogin, login);
router.put("/updatePassword", validateToken, validateUserUpdatePassword, encodePassword, updatePassword);
router.get("/", validateToken, list);

module.exports = router;
