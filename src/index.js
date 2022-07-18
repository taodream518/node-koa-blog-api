/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-21 23:11:03
 * @LastEditTime: 2022-06-21 23:13:13
 */
const { APP_PORT } = require("./config");

const app = require("./app");

app.listen(APP_PORT, () => {
    console.log(`server is running on http://localhost:${APP_PORT}`);
});
