/*
 * @Descripttion: 用户路由表
 * @Author: Coder-Tao
 * @Date: 2022-06-18 15:41:33
 * @LastEditTime: 2022-06-19 02:53:16
 */
const Router = require("koa-router");
const router = new Router({ prefix: "/user" });

// 用户中间件
const { validateUserRegister, encodePassword, validateUserLogin } = require("../middleware/user");
// 验证身份中间件
const { auth } = require("../middleware/auth");
// 用户控制器
const { register, login, list } = require("../controller/user");

router.post("/register", validateUserRegister, encodePassword, register);
router.post("/login", validateUserLogin, login);
router.get("/", auth, list);

module.exports = router;
