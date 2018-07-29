//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activeIndex: 0,
    sliderOffset: 0,
    activeType: "home",
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    banner3: [
      {
        goid: 4,
        src: "../../images/def.jpg",
        url: ""
      },
      {
        goid: 2,
        src: "../../images/def.jpg",
        url: ""
      },
      {
        goid: 5,
        src: "../../images/def.jpg",
        url: ""
      },
    ],
    tabs: [{
      'id': 1,
      'name': '精选',
      'type': 'home'
    },
    {
      'id': 2,
      'name': '儿歌'
    },
    {
      'id': 3,
      'name': '故事'
    },
    {
      'id': 4,
      'name': '英文'
    },
    {
      'id': 5,
      'name': '国学'
    },
    {
      'id': 6,
      'name': '纯音乐'
    },
    {
      'id': 7,
      'name': '更多',
      'type': 'goapp'
    }
    ],
    recommendeds: [
      {
        'id': 1,
        'name': '流行歌曲',
        'scr': '../../images/icon_classify.png'
      },
      {
        'id': 2,
        'name': '巴塔木儿歌',
        'scr': '../../images/icon_classify.png'
      },
      {
        'id': 3,
        'name': '睡前故事大全',
        'scr': '../../images/icon_classify.png'
      },
      {
        'id': 4,
        'name': '性格培养故事',
        'scr': '../../images/icon_classify.png'
      },
      {
        'id': 5,
        'name': '三字经',
        'scr': '../../images/icon_classify.png'
      },
      {
        'id': 6,
        'name': '哈利讲故事',
        'scr': '../../images/icon_classify.png'
      }
    ]
  },

  onLoad: function () {
    console.log("index.js onLoad");
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var data = {
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        }
        console.info("index.js onLoad getSystemInfo success", data, res);
        data.lists = [];
        for (var i = 0; i < 10; i++) {
          data.lists.push(
            {
              id: i,
              name: "节目",
            }
          );
        }
        that.setData(data);
      }
    });
  },
  getSliderOffset: function (activeIndex) {
    console.log("getSliderOffset", this.data.winWidth, this.data.tabs.length, activeIndex)
    return Math.round(this.data.winWidth / this.data.tabs.length * activeIndex);
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
    // if (this.data.currentTab === e.currentTarget.dataset.current) {
    //   //点击的是同一个，则不操作
    //   return false;
    // } else {
    //   that.setData({
    //     currentTab: e.currentTarget.dataset.current
    //   })
    // }
    var data = {
      activeIndex: idx, // 当前点击的tab索引
      sliderOffset: this.getSliderOffset(idx),
      // type类型 home:主页 goapp:提示下载 '':其他
      activeType: this.data.tabs[idx].type ? this.data.tabs[idx].type : "", // 当前tab索引对应的类型
    };
    console.log("tabClick setData", data);
    this.setData(data);
  },
  /**
   * 滑动切换tab
   */
  swiperChange: function (e) {
    console.log("swiperChange", e);
    var idx = e.detail.current;
    var that = this;
    that.setData({
      activeIndex: idx,
      sliderOffset: this.getSliderOffset(idx),
      activeType: this.data.tabs[idx].type ? this.data.tabs[idx].type : "",
    });
  },
  bannerClick: function (e) {
    console.log("aaaaaaaaaaaa", e);
    var idx = e.currentTarget.id;
    var data = {
      activeIndex: idx, // 当前点击的tab索引
      sliderOffset: this.data.sliderWidthOffsetStep * idx,
      // type类型 home:主页 goapp:提示下载 '':其他
      activeType: this.data.tabs[idx].type ? this.data.tabs[idx].type : "", // 当前tab索引对应的类型
    };
    this.setData(data);
  },
  shareClick: function (e) {
    console.log("aaaaaaaaaaaa", e);
    var idx = e.currentTarget.id;
    var data = {
      activeIndex: idx, // 当前点击的tab索引
      sliderOffset: this.data.sliderWidthOffsetStep * idx,
      // type类型 home:主页 goapp:提示下载 '':其他
      activeType: this.data.tabs[idx].type ? this.data.tabs[idx].type : "", // 当前tab索引对应的类型
    };
    this.setData(data);
  },
})
