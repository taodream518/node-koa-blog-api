/*
 * @Descripttion: 用户表
 * @Author: Coder-Tao
 * @Date: 2022-06-18 16:40:38
 * @LastEditTime: 2022-06-21 22:50:14
 */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("tb_users", {
    // id 会被sequelize自动创建并管理
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: "用户名【唯一】",
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: "密码",
    },
    nickName: {
        type: DataTypes.STRING(),
        allowNull: false,
        defaultValue: `昵称_${Math.random().toString(36).slice(2)}`, // 生产随机昵称
        comment: "用户昵称",
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        comment: "用户头像",
    },
    sex: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: "性别【0: 保密(默认) 1: 男 2: 女】",
    },
    userStatus: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: "用户状态【0: 启用(默认) 1: 禁用】",
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: "是否管理员【0: 非管理员(默认) 1: 管理员】",
    },
    isDelete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: "是否删除【0: 未删除(默认); 1: 已删除】",
    },
});

// 强制同步数据库(创建数据表)
// User.sync({ force: true })

module.exports = User;
