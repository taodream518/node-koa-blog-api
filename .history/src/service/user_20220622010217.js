/*
 * @Descripttion: 用户服务
 * @Author: Coder-Tao
 * @Date: 2022-06-18 16:23:19
 * @LastEditTime: 2022-06-22 01:01:49
 */
const User = require("../model/user");
const { Op, where } = require("sequelize");

class UserService {
    // 新增用户
    async create(username, password) {
        // 往数据表插入数据 User.create({ 字段名1: 数据1, 字段名2: 数据2 })
        const res = await User.create({ username, password });
        return res.dataValues;
    }

    /**
     * 用户修改密码
     * @param {number} id
     * @param {string} password 经过加密的密码
     * @returns {boolean}
     */
    async updatePassword({ id, password }) {
        const where = { id };
        const user = {};
        password && Object.assign(user, { password });

        const res = await User.update({password}, { where });
        return res[0] > 0 ? true : false;
    }

    // 用户列表
    async findAll(pageNumber, pageSize, condition) {
        /**
         * 查询条件
         * 1）字段名:值
         * 2）[Op.eq]:值
         */
        const where = {
            isDelete: {
                [Op.eq]: false,
            },
        };

        // 处理模糊查询
        const { username = "", nickName = "" } = condition;
        username && Object.assign(where, { username: { [Op.like]: `%${username}%` } });
        nickName && Object.assign(where, { nickName: { [Op.like]: `%${name}%` } });

        const offset = (pageNumber - 1) * pageSize;
        const { count, rows } = await User.findAndCountAll({
            // 查找的字段名
            // attributes: ["id", "username", "avatar", "nickName", "sex", "created_time"],
            // attributes: {
            //     exclude: [], // 排除的字段
            // },
            offset: offset, // 从第几条开始
            limit: pageSize * 1, // 限制数量
            order: [["createdTime", "desc"]], // 排序
            where,
        });

        return {
            data: {
                pageNumber,
                pageSize,
                total: count,
                list: rows,
            },
        };
    }

    // 用户信息
    async findOne({ id, username, password, isAdmin }) {
        // 条件
        const where = {
            isDelete: {
                [Op.eq]: false,
            },
        };

        id && Object.assign(where, { id });
        username && Object.assign(where, { username });
        password && Object.assign(where, { password });
        isAdmin && Object.assign(where, { isAdmin });

        const res = await User.findOne({
            attributes: ["id", "username", "password", "is_admin"],
            where,
        });

        return res ? res.dataValues : null;
    }
}

module.exports = new UserService();
