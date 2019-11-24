/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-21 11:07:55
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-21 11:37:05
 * @Description:
 */
class HttpException extends Error {
  constructor(msg = "服务器异常", errorCode = 10000, code = 400) {
    super();
    this.errorCode = errorCode;
    this.code = code;
    this.msg = msg;
  }
}
class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.errorCode = errorCode || 10000;
    this.code = 400;
    this.msg = msg || "参数异常";
  }
}

module.exports = { HttpException, ParameterException };
