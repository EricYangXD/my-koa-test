/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-20 17:59:17
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-20 21:34:57
 * @Description:
 */
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    //   程序中捕获的error不应该直接返回到客户端，内容太多
    //   常用的就是HTTP error code
    //   已知型错误，可以校验
    //   未知型错误，程序潜在错误
    //   把捕获到的错误 返回对应的错误码和requestURL
    if (error.errorCode) {
      ctx.body = {
        msg: error.message,
        error_code: error.errorCode,
        request: error.requestUrl
      };
      ctx.status = error.status;
    }
  }
};

module.exports = catchError;
