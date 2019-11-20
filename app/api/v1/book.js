/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-20 13:36:02
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-20 14:58:08
 * @Description:
 */
const Router = require("koa-router");
const router = new Router();
router.get("/v1/book/latest", (ctx, next) => {
  ctx.body = { key: "book" }; //通过ctx.body直接传递json/js对象即可
});

module.exports = router; // 导出模块时如果没有使用{}包裹，那么在引用该模块时也不要用{}包裹
