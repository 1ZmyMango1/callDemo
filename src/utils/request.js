import Axios from 'axios'
import Qs from 'qs'
import { Toast } from 'vant'
// import { getToken } from '@/utils/auth'
import { getTimeMs } from '@/utils/time'

import { cacheData } from '@/global'

const http = Axios.create({ 
	// api的base_url
   baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000,
  transformRequest: [function(data) {
    data = Qs.stringify(data)
    return data
  }]
})


// 设置请求头
http.interceptors.request.use(config => {
    // console.log(http);
// if (localStorage.getItem('token') && config.url!='/api/1.0/HY/staffInParkList') {
    if (localStorage.getItem('token')) {
    config.headers['token'] = localStorage.getItem('token')
  }

// console.log(config.url);

let urlArr=['/api/1.0/fkgl/visitorH5/order','/app/1.0/hy/player/info']

  // 判断接口是否需要添加园区id
  if(urlArr.indexOf(config.url)==-1){
    config.headers['parkId'] = cacheData.user.parkId 
  }


  if(config.url=='/api/1.0/fkgl/visitorH5/order'){
    config.headers['parkId'] = localStorage.getItem('fkyyParkId')
  }

 

	config.headers['jonId'] = getTimeMs()
	return config
}, error => {
	console.log(error)
	Promise.reject(error)
})

// 拦截响应response，并做一些错误处理
http.interceptors.response.use((response) => {
  const res = response.data
  // return res
  
  if (res.code !== 0) {
    Toast({
      position: 'middle',
      message: res.msg || 'Error'
    })
    //登录失效的操作，目前没
    // if (res.code === 20001) {
    // }
    // return Promise.reject(new Error(res.msg || 'Error'))
    return Promise.reject(res);
  } else {
    return res
  }
}, (err) => {
	// 这里是返回状态码不为200时候的错误处理
	if (err && err.response) {
    Toast({
      position: 'bottom',
      message: `${err.response.data.path}报错: ${err.response.data.message}`
    })
	}
	return Promise.reject(err)
})

export default http
