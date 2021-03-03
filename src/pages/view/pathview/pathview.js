// pages/view/pathview/pathview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: [
      {
        title: 'a-一级节点',
        children: [
          {
            title: 'a-二级节点1',
            children: [
              {
                title: 'a-三级节点1',
                children: [
                  {
                    title: 'a-四级节点1'
                  }
                ]
              },
              {
                title: 'a-三级节点2'
              },
              {
                title: 'a-三级节点3'
              }
            ]
          },
          {
            title: 'a-二级节点2',
            children: [
              {
                title: 'a-三级节点1'
              },
              {
                title: 'a-三级节点2'
              }
            ]
          }
        ]
      },
      {
        title: 'b-一级节点',
        children: [
          {
            title: 'b-二级节点1',
            children: [
              {
                title: 'b-三级节点1'
              },
              {
                title: 'b-三级节点2'
              },
              {
                title: 'b-三级节点3'
              }
            ]
          },
          {
            title: 'b-二级节点2',
            children: [
              {
                title: 'b-三级节点1'
              },
              {
                title: 'b-三级节点2'
              }
            ]
          }
        ]
      }
    ],
    unnormalizedValue: [
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        pid: 1,
        name: '2'
      },
      {
        id: 3,
        pid: 1,
        name: '3'
      },
      {
        id: 4,
        pid: 2,
        name: '4'
      },
      {
        id: 5,
        pid: 4,
        name: '5'
      },
      {
        id: 6,
        pid: 5,
        name: '6'
      },
      {
        id: 7,
        name: '7'
      }
    ],
    unnormalizedValue2: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      unnormalizedValue2: this.data.unnormalizedValue
    }, () => {
      setTimeout(() => {
        this.setData({
          unnormalizedValue2: this.data.unnormalizedValue2.concat([
            {
              id: 8,
              name: '8'
            },
            {
              id: 9,
              pid: 5,
              name: '9'
            },
            {
              id: 10,
              pid: 1,
              name: '10'
            },
          ])
        })
      }, 2000);
    });
  },
  selThis(e) {
    console.log(e.detail);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})