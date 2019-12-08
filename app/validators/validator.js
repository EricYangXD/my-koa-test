/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-21 13:49:36
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-12-08 16:15:11
 * @Description:
 */
const { LinValidator, Rule } = require("../../core/lin-validator-v2");

const { User } = require("../models/user");
const { LoginType } = require("../lib/enum");
//继承LinValidator
class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super();
    //参数名称跟要校验的参数名保持一致
    this.id = [new Rule("isInt", "所传参数应为正整数", { min: 1 })];
  }
}
class RegisterValidator extends LinValidator {
  constructor() {
    super();
    //参数名称跟要校验的参数名保持一致
    this.email = [new Rule("isEmail", "请输入正确的邮箱格式")];
    this.password1 = [
      new Rule("isLength", "密码长度为6~32个字符", { min: 6, max: 32 }),
      new Rule(
        "matches",
        "密码不符合安全规范",
        "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]"
      )
    ];
    this.password2 = this.password1;
    this.nickname = [
      new Rule("isLength", "昵称长度为1~10个字符", { min: 1, max: 10 })
      // new Rule("matches", "昵称字符不符合安全规范", "^[A-Za-z0-9]$")
    ];
  }

  validatePassword(vals) {
    const psw1 = vals.body.password1;
    const psw2 = vals.body.password2;
    if (psw1 !== psw2) {
      throw new Error("两次输入的密码不一致");
    }
  }

  async VaildateEmail(vals) {
    const email = vals.body.email;
    const user = await User.findOne({
      // docs.sequelizejs.com   Doc
      where: {
        // 与
        email: email
      }
    });

    if (user) {
      throw new Error("email已存在");
    }
  }
}

class TokenValidator extends LinValidator {
  constructor() {
    super();
    this.account = [
      new Rule("isLength", "不符合账号规则", {
        min: 4,
        max: 32
      })
    ];
    this.secret = [
      new Rule("isLength", "密码长度不符合规范", {
        min: 6,
        max: 32
      }),
      new Rule("isOptional")
    ];

    // type
  }

  validateLoginType(vals) {
    if (!vals.body.type) {
      throw new Error("type是必传参数");
    }
    if (!LoginType.isThisType(vals.body.type)) {
      throw new Error("type参数不合法");
    }
  }
}

module.exports = {
  PositiveIntegerValidator,
  RegisterValidator,
  TokenValidator
};
