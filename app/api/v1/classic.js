/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-20 13:36:07
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-20 16:51:06
 * @Description:
 */
const Router = require("koa-router");
const router = new Router();
router.get("/v1/classic/latest", (ctx, next) => {
  ctx.body = { key: "classic" }; //通过ctx.body直接传递json/js对象即可
});

module.exports = router;
// module.exports = {
//   classic: router
// }; // 导出模块时如果使用{}包裹，那么在引用该模块时也要用{}包裹
