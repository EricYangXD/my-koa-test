/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-24 13:35:45
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-12-08 16:41:34
 * @Description:
 */
const { Sequelize, Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const { sequelize } = require("../../core/db");

class User extends Model {
  //   constructor() {
  //     super();
  //   }
  static async verifyEmailPsw(email, plainPsw) {
    const user = await User.findOne({
      where: {
        email
      }
    });
    if (!user) {
      throw new global.errs.AuthFailed("Account is not exist");
    }
    const correct = bcrypt.compareSync(plainPsw, user.password);
    if (!correct) {
      throw new global.errs.AuthFailed("Password Error");
    }
    return user;
  }
}

User.init(
  {
    id: {
      //主键，唯一性
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING(128),
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      set(val) {
        const salt = bcrypt.genSaltSync(10);
        const psw = bcrypt.hashSync(val, salt);
        this.setDataValue("password", psw); //字段名，值
      }
    },
    openid: {
      type: Sequelize.STRING(64),
      unique: true
    }
    // city: Sequelize.STRING
  },
  {
    sequelize,
    tableName: "user"
  }
);
module.exports = {
  User
};
