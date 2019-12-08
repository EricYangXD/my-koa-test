/*
 * @Author: Eric YangXinde
 * @Date: 2019-12-08 16:04:42
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-12-08 16:22:37
 * @Description:
 */
function isThisType(val) {
  for (let key in this) {
    if (this[key] === val) {
      return true;
    }
  }
  return false;
}

const LoginType = {
  USER_MINI_PROGRAM: 100,
  USER_EMAIL: 101,
  USER_MOBILE: 102,
  ADMIN_EMAIL: 200,
  isThisType //模拟枚举
};

module.exports = {
  LoginType
};
