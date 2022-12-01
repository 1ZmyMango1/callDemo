import Axios from 'axios'
import Qs from 'qs'
import { Toast } from 'vant'
import { getToken } from '@/utils/auth'
// import { getToken } from '@/utils/auth'
import { getTimeMs } from '@/utils/time'

import { cacheData } from '@/global'

const http = Axios.create({ 
	// api的base_url
  baseURL:'/api',
  timeout: 50000,
  transformRequest: [function(data) {
    data = Qs.stringify(data)
    return data
  }]
})


// 设置请求头
http.interceptors.request.use(config => {
    // console.log(http);
    config.headers['Content-Type']='application/x-www-form-urlencoded;charset=utf-8'
    if(getToken())config.headers['token']=getToken()
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
