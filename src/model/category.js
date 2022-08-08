/*
 * @Descripttion: 分类表
 * @Author: Coder-Tao
 * @Date: 2022-06-18 16:40:38
 * @LastEditTime: 2022-07-28 17:00:35
 */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Category = sequelize.define("tb_category", {
    namea: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: "分类名称",
    },
    articleCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "该分类下的文章数量",
    }
});

// 强制同步数据库(创建数据表)
// Category.sync({ force: true })

module.exports = Category;
