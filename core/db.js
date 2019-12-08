/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-24 13:25:34
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-12-08 16:39:06
 * @Description:
 */
const { Sequelize } = require("sequelize");
const {
  dbName,
  host,
  port,
  user,
  password
} = require("../config/config").database;

// mysql2 驱动
const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: true,
  timezone: "+08:00",
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    underscored: true //字段名由驼峰转下划线
  }
});
sequelize.sync({
  force: false //true:把表删除重新创建，慎用
});

module.exports = {
  sequelize
};
