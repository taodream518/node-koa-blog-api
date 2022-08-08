/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-24 12:44:57
 * @LastEditTime: 2022-07-28 16:28:13
 */
const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/category" });
const { validateToken } = require("../middleware/auth");
const { list } = require("../controller/category");

router.get("/", validateToken, list);

module.exports = router;
