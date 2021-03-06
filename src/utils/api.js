import Taro from "@tarojs/taro";

export const apiUrl = "http://rap2api.taobao.org/app/mock/257275/shop";

export function getRequest(url, date) {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: apiUrl + url,
      data: {
        ...date
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
