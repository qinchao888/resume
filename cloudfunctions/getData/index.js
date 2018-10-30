// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  // env: 'test-5d6f4c',
  env: 'release-d2e663',
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection(event.collection).orderBy('order', 'asc').get()
}