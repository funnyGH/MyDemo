var app = getApp()
Page({
  data: {
   logs:[]
  },
  onLoad: function () {
      var logs =wx.getStorageSync('callogs');
      this.data.logs=logs;
  }
})