import {
  Base64
} from 'js-base64';
import md5 from 'js-md5';
import axios from 'axios'

let config={
    appKey:'26342212',
    appSecret:"023387da41303e3c4d929b9757f15cf6"
}

const service = axios.create();

export function post(api, params = {}, headers = {}, apiVersion, sysname) {
  let timestamp = new Date().getTime();
  let signatureNonce = random();
  headers = setHeader(headers, timestamp, signatureNonce, apiVersion);
  let finalParams = "";
  finalParams = getSign2(params, timestamp, signatureNonce);

//   let domain = !sysname ? store.state.axios.domain['default'] : store.state.axios.domain[sysname];
let domain='https://api.hongyanyun.cn'
return service({
    url: api,
    data: finalParams,
    method: 'post',
    baseURL: domain,
    headers: headers
  })
}

//随机数
function random() {
  let num1 = Number((new Date().getTime()).toString().substr(-9)); //当前时间戳毫秒级
  let num2 = Math.ceil(Math.random() * 100000000); //一亿内的随机数
  let num = Number((num1 + num2).toString().substr(-9));
  return num;
}

//签名算法2.0
function getSign2(params, timestamp, signatureNonce) {
  let paramString = JSON.stringify(params);
  let object = Base64.encode(paramString);
  let randomKey = localStorage.getItem('randomKey');
  randomKey = randomKey ? randomKey : "";
  let appSecret = config.appSecret;
  let longString = object + randomKey + appSecret + timestamp + signatureNonce;
  let sign = md5(longString);
  let finalParams = {
    object: object,
    sign: sign
  }
  return finalParams;
}

//公用header头数据处理
function setHeader(headers, timestamp, signatureNonce, apiVersion) {
    if (typeof(headers) == 'object') {
      apiVersion = apiVersion ? apiVersion : "1.0"
    //   let token = localStorage.getItem('token');
    let token = false;
      let comHeaders = {
        "Content-Type": "application/json",
        "AppKey": config.appKey,
        "Timestamp": timestamp,
        "SignatureNonce": signatureNonce,
        "SignatureVersion": '2.0',
        "ApiVersion": apiVersion
      };
      headers = {...comHeaders,...headers};
      if (token) {
        headers.Authorization = token;
      }
    } else if (typeof(headers) == 'boolean') {
      if (headers == true) {
        // let token = localStorage.getItem('token');
        let token = false
        apiVersion = apiVersion ? apiVersion : "1.0"
        headers = {
          "Content-Type": "application/json",
          "AppKey": config.appKey,
          "Timestamp": timestamp,
          "SignatureNonce": signatureNonce,
          "SignatureVersion": '2.0',
          "ApiVersion": apiVersion
        };
        if (token) {
          headers.Authorization = token;
        }
      } else {
        headers = {};
      }
    } else {
      headers = {};
    }
    return headers;
  }
