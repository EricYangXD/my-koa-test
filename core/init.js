/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-20 15:40:34
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-20 16:08:36
 * @Description:
 */
const requireDirectory = require("require-directory");
const Router = require("koa-router");
class InitManager {
  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRouters();
  }

  static initLoadRouters() {
    // 1.path config
    // 2.使用绝对路径
    const apiDirectory = `${process.cwd()}/app/api`;
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    });
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
  }
}

module.exports = InitManager;
// class InitManager {
//   static initCore(app) {
//     InitManager.initLoadRouters(app);
//   }

//   static initLoadRouters(app) {
//     requireDirectory(module, "./app/api", {
//       visit: whenLoadModule
//     });
//     function whenLoadModule(obj) {
//       if (obj instanceof Router) {
//         app.use(obj.routes());
//       }
//     }
//   }
// }
