/*
 * @Descripttion: 文件服务ERROR 【12xxx开头】
 * @Author: Coder-Tao
 * @Date: 2022-06-19 02:39:47
 * @LastEditTime: 2022-06-29 12:38:07
 */
// 文件上传错误
const FILE_UPLOAD_ERROR = {
    code: "12000",
    msg: "文件上传失败",
};

// 文件上传类型错误
const FILE_UPLOAD_TYPE_ERROR = {
    code: "12001",
    msg: "不允许上传的文件类型",
};


module.exports = {
    FILE_UPLOAD_ERROR,
    FILE_UPLOAD_TYPE_ERROR
};
