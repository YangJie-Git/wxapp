//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activeIndex: 0,
    sliderOffset: 0,
    activeType:"home",
    tabs: [
      {
        'id': 1,
        'name': '精选',
        'type': 'home'
      },
      {
        'id': 2,
        'name': '动画'
      },
      {
        'id': 3,
        'name': '儿歌'
      },
      {
        'id': 4,
        'name': '故事'
      },
      {
        'id': 5,
        'name': '早教'
      },
      {
        'id': 6,
        'name': '英文'
      },
      {
        'id': 7,
        'name': '更多',
        'type': 'goapp'
      }
    ]
  },

  onLoad: function () {
    console.log("index.js onLoad");
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var data = {
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        }
        console.info("index.js onLoad getSystemInfo success", data,res);
        that.setData(data);
      }
    });
  },

  /**
   * 页面显示
   */
  // onShow: function () {
  //   // 小于一定数量时 固定宽度
  //   var span = wx.getSystemInfoSync().windowWidth / this.data.tabs.length + 'rpx';
  //   this.setData({
  //     itemWidth: this.data.tabs.length <= 5 ? span : '160rpx'
  //   });
  // },
  /**
   * tab点击处理
   */
  tabClick: function (e) {
    var idx = e.currentTarget.id;
    console.log("tabClick", e.currentTarget);
    var data = {
      activeIndex: idx, // 当前点击的tab索引
      sliderOffset: e.currentTarget.offsetLeft,
      // type类型 home:主页 goapp:提示下载 '':其他
      activeType: this.data.tabs[idx].type ? this.data.tabs[idx].type : "", // 当前tab索引对应的类型
    };
    console.log("tabClick setData", data);
    this.setData(data);
  },
  testClick: function (e) {
    console.log("aaaaaaaaaaaa");
    var idx =4;
    var data = {
      activeIndex: idx, // 当前点击的tab索引
      sliderOffset: this.data.sliderWidthOffsetStep*idx,
      // type类型 home:主页 goapp:提示下载 '':其他
      activeType: this.data.tabs[idx].type ? this.data.tabs[idx].type : "", // 当前tab索引对应的类型
    };
    this.setData(data);
  }
})

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
