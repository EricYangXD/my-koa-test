/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-20 17:59:17
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-21 15:50:00
 * @Description:
 */
const { HttpException } = require("../core/http-exception");

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (global.config.environment === "dev") {
      throw error;
    }
    //   程序中捕获的error不应该直接返回到客户端，内容太多
    //   常用的就是HTTP error code
    //   已知型错误，可以校验
    //   未知型错误，程序潜在错误
    //   把捕获到的错误 返回对应的错误码和requestURL
    if (error instanceof HttpException) {
      //如果是HttpException，那么就说明这是个已知错误，可以给出准确提示
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
        // request: error.requestUrl
      };
      ctx.status = error.code;
    } else {
      //处理未知异常
      ctx.body = {
        msg: "Unknown mistake",
        error_code: 99999,
        request: `${ctx.method} ${ctx.path}`
        // request: error.requestUrl
      };
      ctx.status = 500;
    }
  }
};

module.exports = catchError;
