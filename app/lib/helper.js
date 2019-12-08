/*
 * @Author: Eric YangXinde
 * @Date: 2019-12-08 15:40:41
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-12-08 15:43:44
 * @Description:
 */
function success(msg, errorCode) {
  throw new global.errs.Success(msg, errorCode);
}
module.exports = {
  success
};
