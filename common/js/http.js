import { config } from '../../static/config'
class HTTP {
  request ({ url, data = {}, method = 'GET' }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }
  _request (url, resolve, reject, data = {}, method = 'GET') {
    uni.showLoading({
      title: '加载中'
    });
    uni.request({
      url: config.api_url + url,
      method: method,
      data: data,
      timeout: 30000,
      success: (res) => {
        uni.hideLoading();
        uni.stopPullDownRefresh();
        if (res.statusCode == 200) {
          resolve(res.data)
        }else {
          reject(res)
          console.log(res)
          _show_error(res.data.Message)
        }
      },
      fail: (err) => {
        console.log(err, 4545)
        _show_error('请求失败！')
      },
      complete: function () {
        uni.hideLoading()
      }
    })
  }
}
let _show_error = function (err_msg) {
  uni.showToast({
    title: err_msg,
    icon: 'none',
    duration: 2500
  })
}
export {
  HTTP
}