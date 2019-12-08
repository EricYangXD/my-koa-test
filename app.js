/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-19 14:04:35
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-24 17:55:57
 * @Description:
 */
const Koa = require("koa");
const requireDirectoty = require("require-directory");
const Router = require("koa-router");
const parser = require("koa-bodyparser");
const static = require("koa-static");
const path = require("path");
const InitManager = require("./core/init");
const catchError = require("./middlewares/exceptions");

// require("./app/models/classic");
// 应用程序对象，包含很多中间件
const app = new Koa();

app.use(parser());
app.use(static(path.join(__dirname, ".static")));
app.use(catchError);
InitManager.initCore(app);
app.listen(8090);

// process.cwd(); //绝对路径
