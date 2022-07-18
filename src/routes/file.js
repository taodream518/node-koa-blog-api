/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-24 12:44:57
 * @LastEditTime: 2022-06-24 12:52:54
 */
const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/file" });
const { validateToken } = require("../middleware/auth");
const { single, multi } = require("../controller/file");

router.post("/upload", validateToken, single);
router.post("/uploads", validateToken, multi);

module.exports = router;
