// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  // env: 'test-5d6f4c',
  env: 'release-d2e663',
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const openId = event.userInfo.openId
    console.log('openId', openId)
    return await db.collection(event.collection).update({ // 使用云函数进行批量更新，为每条记录添加_openid字段
      data: {
        _openid: openId
      }
    })
  } catch (e) {
    console.error(e)
  }
}