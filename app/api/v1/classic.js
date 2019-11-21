/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-20 13:36:07
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-20 21:35:17
 * @Description:
 */
const Router = require("koa-router");
const router = new Router();
router.post("/v1/:id/classic/latest", (ctx, next) => {
  const path = ctx.params; //id JS对象
  const query = ctx.request.query; //param JS对象
  const header = ctx.request.header; //header JS对象
  const token = ctx.request.header.token; //token
  const body = ctx.request.body; //body JS对象

  if (true) {
    const error = new Error("传入的参数为空");
    error.errorCode = 100001;
    error.status = 400;
    error.requestUrl = ctx.method + ctx.path;
    throw error;
  }

  ctx.body = {
    key: "classic"
  }; //通过ctx.body直接传递json/js对象即可
  throw new Error("API Exception...");
});

module.exports = router;
// module.exports = {
//   classic: router
// }; // 导出模块时如果使用{}包裹，那么在引用该模块时也要用{}包裹

// AOP 面向切面编程
