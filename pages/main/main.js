Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    datalists: [
      "习近平主持中央财经领导小组第十五次会议",
      "李克强打叉的“万里审批图”成历史",
      "新疆自治区举行反恐维稳誓师大会",
      "朝鲜代表团抵达马来西亚处理金正男遇害案",
      "宝马车祸案肇事者二次精神鉴定:案发为精神病状态",
      "朝鲜代表团抵达马来西亚处理金正男遇害案",
      "宝马车祸案肇事者二次精神鉴定:案发为精神病状态",
      "朝鲜代表团抵达马来西亚处理金正男遇害案",
      "宝马车祸案肇事者二次精神鉴定:案发为精神病状态",
      "朝鲜代表团抵达马来西亚处理金正男遇害案",
      "宝马车祸案肇事者二次精神鉴定:案发为精神病状态",
      "砸锅卖铁！索尼是在走向毁灭 还是在奔向新生？"
    ],
    reslists: ["hello", "thank you for your read", "if u feel good", "can u give me good？"],
    iconlists: [
      { normal: "../../images/wp.png", focus: "../../images/wpselect.png" },
      { normal: "../../images/ss.png", focus: "../../images/ssselect.png" },
      { normal: "../../images/hc.png", focus: "../../images/hcselect.png" },
      { normal: "../../images/my.png", focus: "../../images/myselect.png" },
    ]
  },
  onLoad: function (options) {
    var that = this;
    //获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  /**
   * 滑动切换tab
   */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /**
   * 点击切换tab
   */
  swichNav: function (e) {
    console.log(e)
    var that = this;
    if (this.data.currentTab === e.currentTarget.dataset.current) {
      //点击的是同一个，则不操作
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }

  }
})
