Page({
  data: {
    work: []
  },
  onLoad () {
    wx.cloud.callFunction({
      name: 'getData',
      data: {
        collection: 'qinchao_work'
      },
      success: res => {
        this.setData({
          work: res.result.data
        })
      }
    })
  }
})
