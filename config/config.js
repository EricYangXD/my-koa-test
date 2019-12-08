/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-21 15:45:43
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-12-08 16:48:09
 * @Description:
 */
module.exports = {
  environment: "dev", // 可以在看到控制台打印日志
  // prod ctx.body==>Internal error

  database: {
    dbName: "koa",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456"
  },
  security: {
    secretKey: "dfjhjahhreuhwuhgu", //应该是一个随机字符串
    expiresIn: 60 * 60
  }
};
