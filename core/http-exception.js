/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-21 11:07:55
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-12-08 16:44:15
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
class Success extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.errorCode = errorCode || 0;
    this.code = 201;
    this.msg = msg || "success";
  }
}
class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.errorCode = errorCode || 10000;
    this.code = 404;
    this.msg = msg || "Not Found";
  }
}
class AuthFailed extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.errorCode = errorCode || 10004;
    this.code = 401;
    this.msg = msg || "Auth Failed";
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
  NotFound,
  AuthFailed
};
