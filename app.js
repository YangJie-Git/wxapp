//app.js
App({
  onLaunch: function() {
    console.log('App Launch');
    this.wxLogin(() => {
      console.log("login end");
    });
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },

  globalData: {
    userInfo: null,
    hasLogin: false
  },

  wxLogin: function(cb) {
    var that = this
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.login({
    //         success: rs => {
    //           wx.request({
    //             url: 'xxxx',
    //             header: {
    //               'content-type': 'application/json'
    //             },
    //             data: {
    //               code: rs.code,
    //             },
    //             success: function(res) {
    //               // console.log(res);
    //               if (res.data.ret == 460) {

    //                 wx.navigateBack({
    //                   delta: 1
    //                 })
    //               }
    //               //设置用户信息
    //               wx.getUserInfo({
    //                 success: (rss) => {
    //                   // console.log(rss);
    //                   wx.setStorageSync("avatar", rss.userInfo.avatarUrl)
    //                   if (rss.userInfo.nickName != wx.getStorageSync("nick")) {
    //                     wx.request({
    //                       url: 'xxxxx',
    //                       header: {
    //                         'content-type': 'application/json'
    //                       },
    //                       data: {
    //                         uid: wx.getStorageSync('uid'),
    //                         voucher: wx.getStorageSync('voucher'),
    //                         encryptedData: rss.encryptedData,
    //                         iv: rss.iv
    //                       },
    //                       success: (res) => {
    //                         wx.setStorageSync();
    //                       }
    //                     })
    //                   }


    //                 }
    //               })
    //               if (that.globalData.option.scene == 1044) {
    //                 wx.getShareInfo({
    //                   shareTicket: that.globalData.option.shareTicket,
    //                   success: (res) => {
    //                     wx.request({
    //                       url: that.globalData.base_url + '/weixinapi.php?method=setShareData',
    //                       method: "GET",
    //                       data: {
    //                         uid,
    //                         voucher,
    //                         encryptedData: res.encryptedData,
    //                         iv: res.iv
    //                       },
    //                       success: (rs) => {
    //                         cb();
    //                       }
    //                     })
    //                   }
    //                 })
    //               } else {
    //                 cb()
    //               }


    //             }
    //           });
    //         }
    //       })




    //     } else {
    //       //还没有授权
    //       wx.getUserInfo({
    //         success: (rss) => {
    //           wx.setStorageSync("avatar", rss.userInfo.avatarUrl)
    //           wx.login({
    //             success: res => {
    //               //点击授权成功
    //               if (res.code) {
    //                 wx.request({
    //                   url: 'xxxx',
    //                   header: {
    //                     'content-type': 'application/json'
    //                   },
    //                   data: {
    //                     code: res.code,
    //                   },
    //                   success: function(res) {
    //                     if (res.data.ret == 460) {
    //                       wx.navigateBack({
    //                         delta: 1
    //                       })
    //                     }

    //                     wx.setStorageSync('uid', uid)
    //                     wx.setStorageSync('nick', name)
    //                     wx.setStorageSync('voucher', voucher);
    //                     wx.request({
    //                       url: 'xxxx',
    //                       header: {
    //                         'content-type': 'application/json'
    //                       },
    //                       data: {
    //                         uid: wx.getStorageSync('uid'),
    //                         voucher: wx.getStorageSync('voucher'),
    //                         encryptedData: rss.encryptedData,
    //                         iv: rss.iv
    //                       },
    //                       success: (res) => {}
    //                     })
    //                     if (that.globalData.option.scene == 1044) {
    //                       wx.getShareInfo({
    //                         shareTicket: that.globalData.option.shareTicket,
    //                         success: (res) => {
    //                           wx.request({
    //                             url: that.globalData.base_url + 'setShareData',
    //                             method: "GET",
    //                             data: {
    //                               uid,
    //                               voucher,
    //                               encryptedData: res.encryptedData,
    //                               iv: res.iv
    //                             },
    //                             success: (res) => {
    //                               // console.log("------------------")
    //                               // console.log(res)
    //                               cb();
    //                             }
    //                           })
    //                         }
    //                       })
    //                     } else {
    //                       cb();
    //                     }




    //                   }
    //                 });
    //               }
    //             }
    //           })
    //         },
    //         fail: (res) => {
    //           //点击授权拒绝
    //           wx.showModal({
    //             title: '提示',
    //             content: '获取用户信息失败,需要授权才能继续使用！',
    //             showCancel: false,
    //             confirmText: "授权",
    //             success: (res) => {
    //               if (res.confirm) {
    //                 wx.openSetting({
    //                   success: (res) => {
    //                     if (res.authSetting["scope.userInfo"]) {
    //                       //授权成功
    //                     } else {
    //                       //仍然没有授权
    //                     }
    //                   }
    //                 })
    //               }
    //             }
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
    /*
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log('app.js login success', res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('app.js login success', res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('app.js login success =>getUserInfo success', res);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                console.log('app.js login success =>getUserInfo success userInfoReadyCallback', res);
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    */
  }
})