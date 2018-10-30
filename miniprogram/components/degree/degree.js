// components/degree/degree.js
Component({
  properties: {
    degreeWidth: {
      type: String,
      value: '0%'
    }
  },
  ready () {
    var text = this.getText(this.data.degreeWidth)
    this.setData({
      text: text
    })
  },
  data: {
    textList: ['了解', '一般', '熟悉', '精通'],
    text: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getText: function (value) {
      var number = parseInt(value) * 4 / 100 - 1
      return this.data.textList[number]
    }
  }
})
