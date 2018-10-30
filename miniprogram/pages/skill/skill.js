Page({
  data: {
    skillsData: []
  },
  onLoad () {
    wx.cloud.callFunction({
      name: 'getData',
      data: {
        collection: 'qinchao_skills'
      },
      success: res => {
        this.setData({
          skillsData: res.result.data
        })
      }
    })
  }
})