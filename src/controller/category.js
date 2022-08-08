/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-24 12:32:53
 * @LastEditTime: 2022-07-28 16:21:23
 */
const CategoryService = require("../service/category");

class CategoryController {
    // 分类列表
    async list(ctx, next) {
        // 1. 解析pageNum和pageSize, 剩余的为查询条件
        const { pageNumber = 1, pageSize = 10, ...condition } = ctx.request.query;
        // 2. 调用数据处理的相关方法
        const res = await CategoryService.findAll(pageNumber, pageSize, condition);
        // 3. 返回结果
        ctx.body = {
            code: 0,
            msg: "获取分类列表成功",
            data: res,
        };
    }
}

module.exports = new CategoryController();
