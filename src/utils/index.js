/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-06-29 14:53:59
 * @LastEditTime: 2022-06-29 16:08:56
 */
const fs = require("fs");
const moment = require("moment");

/* 根据当前日期生成目录 */
const createDirPath = dir => {
    const date = moment().format("YYYYMMDD");
    const path = dir + "/" + date;

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }

    return path;
};

module.exports = {
    createDirPath,
};
