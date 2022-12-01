import http from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/app/1.0/player/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo() {
//   return request({
//     url: '/app/1.0/hy/player/info',
//     // url: '/api/1.0/manager/home/info',
//     // url: '/api/1.0/HY/getUserInfo',
//     method: 'post'
//   })
// }

// export function logout() {
//   return request({
//     url: '/app/1.0/player/logout',
//     method: 'post'
//   })
// }

// // 获取当前园区信息
// export function parkInfo(data) {
//   return request({
//     url: '/api/1.0/HY/parkInfo',
//     method: 'post',
//     data:data
//   })
// }


// 个人信息
// export function login(){
//   return http({
//     url:'/api/User/userInfo',
//     method:'GET'
//   })
// }

// 登录
export function login(data){
  return http ({
    url:'/api/Login/login',
    method:'POST',
    data:data
  })
}