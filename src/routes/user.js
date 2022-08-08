/*
 * @Descripttion: 用户路由表
 * @Author: Coder-Tao
 * @Date: 2022-06-18 15:41:33
 * @LastEditTime: 2022-07-28 16:28:35
 */
const Router = require("koa-router");
const router = new Router({ prefix: "/user" });
// 中间件引入
const {
    validateUserRegister,
    encodePassword,
    validateUserLogin,
    validateUserUpdatePassword,
} = require("../middleware/user");
const { validateToken } = require("../middleware/auth");
// 用户控制器
const { register, login, userInfo, updatePassword, list } = require("../controller/user");

router.post("/register", validateUserRegister, encodePassword, register);
router.post("/login", validateUserLogin, login);
router.get("/userInfo", validateToken, userInfo);
router.put("/updatePassword", validateToken, validateUserUpdatePassword, encodePassword, updatePassword);
router.get("/", validateToken, list);

module.exports = router;
