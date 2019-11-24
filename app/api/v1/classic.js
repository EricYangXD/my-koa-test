/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-20 13:36:07
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-21 14:38:01
 * @Description:
 */
const Router = require("koa-router");
const router = new Router();
const { PositiveIntegerValidator } = require("../../validators/validator");
// const {
//   HttpException,
//   ParameterException
// } = require("../../../core/http-exception");

router.post("/v1/:id/classic/latest", (ctx, next) => {
  const path = ctx.params; //id JS对象
  const query = ctx.request.query; //param JS对象
  const header = ctx.request.header; //header JS对象
  const token = ctx.request.header.token; //token
  const body = ctx.request.body; //body JS对象

  // 正整数校验器
  const positiveInt = new PositiveIntegerValidator().validate(ctx);
  const id = positiveInt.get("path.id", (parsed = false));
  ctx.body = { id: id };
  //未知异常举例：语法错误啥的
  // ssss;

  // if (true) {
  //   // const error = new HttpException("传入的参数为空", 10001, 400);
  //   // const error = new ParameterException();//每次都要手动导入的方案
  //   const error = new global.errs.ParameterException(); //使用全局挂载的方案
  //   // error.errorCode = 100001;
  //   // error.status = 400;
  //   // error.requestUrl = ctx.method + ctx.path;
  //   // 抛出异常后后续代码不再执行
  //   throw error;
  // }

  // ctx.body = {
  //   key: "classic"
  // }; //通过ctx.body直接传递json/js对象即可
  // throw new Error("API Exception...");
});

module.exports = router;
// module.exports = {
//   classic: router
// }; // 导出模块时如果使用{}包裹，那么在引用该模块时也要用{}包裹

// AOP 面向切面编程
