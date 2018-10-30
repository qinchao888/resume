//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env: 'test-5d6f4c',
        env: 'release-d2e663',
        traceUser: true,
      })
      // wx.cloud.callFunction({
      //   name: 'update',
      //   data: {
      //     collection: 'qinchao_experience'
      //   }
      // })
    }

    this.globalData = {}
  }
})
