Page({
  data: {
    info: []
  },
  onLoad () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    wx.cloud.callFunction({
      name: 'getData',
      data: {
        collection: 'qinchao_info'
      },
      success: res => {
        this.setData({
          info: res.result.data
        })
      }
    })
  }
})
