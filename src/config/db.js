/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-18 16:24:50
 * @LastEditTime: 2022-06-21 23:12:34
 */

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require("./index");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: "mysql",
    logging: false,
    timezone: "+08:00", //改为标准时区
    omitNull: true, // 是否将undefined转化为null
    // sync: { force: true }, // 强制同步数据库(创建数据表)
    pool: {
        max: 10, //最大连接数量
        min: 0, //最小连接数
        idle: 10 * 1000, //若某个线程10秒没有使用，就释放
    },
    define: {
        timestamps: true, // 指定是否创建 createdAt和 updatedAt字段
        createdAt: "createdTime",
        updatedAt: "updatedTime",

        paranoid: false,
        deletedAt: "deleted_time", // 指定是否创建 deletedAt字段(改为deleted_time) 【paranoid启用才能工作】
        underscored: true, // 驼峰转下划线

        freezeTableName: true, // 是否禁用修改表名 【默认会转复数，tb_user -> tb_users】
    },
    // 添加这个配置
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
    },
});

sequelize
    .authenticate()
    .then(() => console.log("数据库连接成功！"))
    .catch(e => console.log(`数据库连接失败！Error: ${e}`));

module.exports = sequelize;
