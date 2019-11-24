/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-21 13:49:36
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-21 14:03:51
 * @Description:
 */
const { LinValidator, Rule } = require("../../core/lin-validator");
//继承LinValidator
class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super();
    //参数名称跟要校验的参数名保持一致
    this.id = [new Rule("isInt", "所传参数应为正整数", { min: 1 })];
  }
}

module.exports = {
  PositiveIntegerValidator
};
