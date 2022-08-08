/*
 * @Descripttion: 分类服务
 * @Author: Coder-Tao
 * @Date: 2022-06-18 16:23:19
 * @LastEditTime: 2022-07-28 16:46:12
 */
const Category = require("../model/category");
const { Op } = require("sequelize");

class CategoryService {
    // 分类列表
    async findAll(pageNumber, pageSize, condition) {
        const where = {};

        // 处理模糊查询
        const { name = "" } = condition;
        name && Object.assign(where, { name: { [Op.like]: `%${name}%` } });
        const offset = (pageNumber - 1) * pageSize;
        const { count, rows } = await Category.findAndCountAll({
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
}

module.exports = new CategoryService();
