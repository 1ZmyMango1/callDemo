import request from '@/utils/request'
import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from '@/utils/auth'
import { getTimeMs } from '@/utils/time'
import { cacheData } from '@/global'

// 发送短信验证码
export function smsCode(data) {
  return request({
    url: '/api/1.0/common/smscode',
    method: 'post',
    data
  })
}

export function searchAll(type, data) {
  return request({
    url: '/api/1.0/common/search/' + type,
    method: 'post',
    data
  })
}
/**
 * 上传图片公共接口
 * @param {*} upfile 图片文件
 * @param {*} CB 成功回调
 */
export function uploadImg(upfile, CB) {
  let toast = Toast.loading({
    message: '加载中...',
    forbidClick: true
  });
  let param = new FormData(); //创建form对象
  param.append('upfile', upfile);//通过append向form对象添加数据
  let config = {
    headers:{
      'Content-Type':'multipart/form-data',
      token: getToken() || localStorage.getItem('token'),
      jonId: getTimeMs(),
      parkId : cacheData.user.parkId,
      responseType: 'blob',
        // responsebold:'bold'
      // randomKey:localStorage.getItem('randomKey')
    }
  };  //添加请求头
  // axios.post(process.env.VUE_APP_BASE_API + '/api/1.0/common/file/upload/api',param,config).then(({ data })=>{
    axios.post(baseApiUrl + '/api/1.0/common/file/upload/api',upfile,config).then(({ data })=>{
    toast.clear()
    typeof CB === 'function' && CB(data)
  }).catch(err => {
    toast.clear()
  })
}







/**
 * 上传图片公共接口
 * @param {*} upfile 图片文件
 * @param {*} CB 成功回调
 */
export function uploadImg1(upfile, CB) {
  // let toast = Toast.loading({
  //   message: '加载中...',
  //   forbidClick: true
  // });
  let param = new FormData(); //创建form对象
  param.append('upfile', upfile);//通过append向form对象添加数据
  // param.append('responseType', 'blob');
  let config = {
    headers:{
      'Content-Type':'multipart/form-data',
      token: getToken() || localStorage.getItem('token'),
      jonId: getTimeMs(),
      parkId : cacheData.user.parkId,
      // randomKey:localStorage.getItem('randomKey')
    }
  };  //添加请求头
  // axios.post(process.env.VUE_APP_BASE_API + '/api/1.0/common/file/upload/api',param,config).then(({ data })=>{
    axios.post(baseApiUrl + '/api/1.0/common/file/upload/api',param,config).then(({ data })=>{
    // toast.clear()
    typeof CB === 'function' && CB(data)
  }).catch(err => {
    // toast.clear()
  })
}

/**
 * 三级树形，  园区 - 楼栋 - 楼层
 */
export function getFloor() {
  return request({
    url: '/api/1.0/wygl/park/unit/listParkFloor',
    method: 'post'
  })
}

/**
 * 三级树形，  园区 - 楼栋 - 单元
 */
export function getUnit() {
  return request({
    url: '/api/1.0/wygl/park/unit/listParkUnit',
    method: 'post'
  })
}

/**
 * 获取楼层区域数据接口
 */

export function getArea(data, type = 'list') {
  return request({
    url: `/api/1.0/base/w301040area/${type}`,
    method: 'post',
    data
  })
}

/**
 * 获取楼层数据接口
 */

export function getFloorList(data, type = 'list') {
  return request({
    url: `/api/1.0/base/w301030floor/${type}`,
    method: 'post',
    data
  })
}

// 页面获取token
export function getVisitorToken() {
  return request({
    url: '/home',
    method: 'get'
  })
}


// 人脸识别上传base图片
export function pushImage(data) {
  return request({
    url: '/api/1.0/HY/updateUser',
    method: 'post',
    data
  })
}

// base64图片上传
export function base64Upload(data) {
  return request({
    url: '/common/2.0/file/upload',
    method: 'post',
    data
  })
}