/*
 * @Author: Eric YangXinde
 * @Date: 2019-11-20 19:45:31
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2019-11-20 19:57:38
 * @Description:
 */

function func1() {
  func2();
}

async function func2() {
  try {
    await func3();
  } catch (e) {
    console.log(e);
  }
}

function func3() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const r = Math.random();
      if (r < 0.5) {
        reject("error async");
      }
    });
  });
}

func1();
