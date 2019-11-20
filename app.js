/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-19 14:04:35
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-20 15:56:02
 * @Description:
 */
const Koa = require("koa");
const requireDirectoty = require("require-directory");
const Router = require("koa-router");
const InitManager = require("./core/init");

// 应用程序对象，包含很多中间件
const app = new Koa();
InitManager.initCore(app);
app.listen(8090);

// process.cwd(); //绝对路径
