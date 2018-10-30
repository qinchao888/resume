Page({
  data: {
    experience: []
  },
  onLoad () {
    wx.cloud.callFunction({
      name: 'getData',
      data: {
        collection: 'qinchao_experience'
      },
      success: res => {
        this.setData({
          experience: res.result.data
        })
      }
    })
  }
})
