/*
 * @Author: Eric YangXinde
 * @Date: 2019-12-08 15:53:39
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-12-08 16:55:49
 * @Description:
 */
const Router = require("koa-router");
const { TokenValidator } = require("../../validators/validator");
const { LoginType } = require("../../lib/enum");
const { User } = require("../../models/user");
const { generateToken } = require("../../../core/util");
const router = new Router({
  prefix: "/v1/token"
});

router.post("/", async ctx => {
  const v = await new TokenValidator().validate(ctx);
  let token;
  switch (v.get("body.type")) {
    case LoginType.USER_EMAIL:
      token = await emailLogin(v.get("body.account"), v.get("body.secret"));
      break;
    case LoginType.USER_MINI_PROGRAM:
      break;
    default:
      throw new global.errs.ParameterException("没有相应的处理函数");
      break;
  }
  ctx.body = {
    token
  };
});

async function emailLogin(account, secret) {
  const user = await User.verifyEmailPsw(account, secret);
  const _token = generateToken(user.isNewRecord, 2);
  return _token;
}

module.exports = router;
