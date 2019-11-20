/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-19 14:04:35
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-20 15:36:35
 * @Description:
 */
const Koa = require("koa");
const requireDirectoty = require("require-directory");
const Router = require("koa-router");
// 应用程序对象，包含很多中间件
const app = new Koa();
// const router = new Router();

// const { classic } = require("./api/v1/classic"); // 模块的导出方式不同，引入方式也不相同
// const book = require("./api/v1/book");
// // 手动注册
// app.use(classic.routes());
// app.use(book.routes());
// 自动注册
// const modules_v1 = requireDirectoty(module, "./api/v1", {
requireDirectoty(module, "./app/api", {
  visit: whenLoadModule
});
function whenLoadModule(obj) {
  if (obj instanceof Router) {
    app.use(obj.routes());
  }
}

// router.get("/classic/latest", (ctx, next) => {
//   ctx.body = { key: "music" }; //通过ctx.body直接传递json/js对象即可
// });
// router.get("/classic/lates", (ctx, next) => {
//   ctx.body = { key: "test" }; //通过ctx.body直接传递json/js对象即可
// });

// app.use(router.routes()); //注册routes，就相当于注册一个中间件

app.listen(8090, function() {});
// 注册中间件，可以多个，但是只会执行第一个注册的
// app.use(async (ctx, next) => {
//   // 异步编程
//   console.log(1);
//   //   const a = next(); // 执行下一个中间件 返回一个：Promise{下一个中间件返回的值，没有返回值则为undefined}
//   //   console.log(a); // Promise{"hello dalao"}
//   //   a.then(res => {
//   //     console.log(res);
//   //   }); // "hello dalao"
//   const a = await next(); // 使用await之后，会直接拿到值，先输出a，再输出2
//   console.log(a); // hello dalao
//   console.log(2);
// });
// async会使函数返回一个Promise
// app.use(async (ctx, next) => {
//   const axios = require("axios");
//   // axios返回一个Promise对象，await能取出这个对象中的值
//   const start = Date.now();
//   const res = await axios.get("https://baidu.com");
//   const end = Date.now();

//   console.log(end - start);
//   //   console.log(res);
//   //   console.log(3);
//   //   next();
//   //   console.log(4); // 洋葱模型 输出：1，3，4，2
//   //   return "hello dalao";
// });
