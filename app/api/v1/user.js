/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-24 15:49:51
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-12-08 15:47:12
 * @Description:
 */
const Router = require("koa-router");

const { RegisterValidator } = require("../../validators/validator");

const { User } = require("../../models/user"); //操作数据库要依赖自己创建的模型
const router = new Router({
  prefix: "/v1/user"
});

const { success } = require("../../lib/helper");

router.post("/register", async ctx => {
  // validator 必须在第一行
  const v = await new RegisterValidator().validate(ctx);
  const user = {
    email: v.get("body.email"),
    password: v.get("body.password2"),
    nickname: v.get("body.nickname")
  };
  const r = await User.create(user); //存储到数据库
  // throw new global.errs.Success(); // 1.操作成功后以返回异常的方式通知前端
  success(); // 2.操作成功后以返回异常的方式通知前端，封装一下，同1
  // ctx.body = {
  //   msg: "ok",
  //   errorCode: 0
  // }; //3.操作成功后通知前端
});

module.exports = router; //一定要导出才能自动加载
