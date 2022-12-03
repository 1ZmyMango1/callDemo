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




// 登录
export function login(data){
  return http ({
    url:'/Login/login',
    method:'POST',
    data:data
  })
}

// 获取验证码
export function securityCode(params){
  return http ({
    url:`/Pub/sendCode`,
    method:'GET',
    params
  })
}

// // 获取验证码
// export function securityCode(phone){
//   return http ({
//     url:`/Pub/sendCode`,
//     method:'GET',
//     params: {
//       phone
//     }
//   })
// }

// 个人信息
export function userlLogin(){
  return http({
    url:'/User/userInfo',
    method:'GET'
  })
}

// 修改用户信息
export function editUser(data){
  return http({
    url:'/User/editUser',
    method:'POST',
    data
  })
}

// 修改手机号
export function replacePhone(data){
  return http({
    url:'/User/replacePhone',
    method:'POST',
    data
  })
}

//实名认证
export function realNameCertification(data){
  return http({
    url:'/User/realNameCertification',
    method:'POST',
    data
  })
}

// 修改密码
export function setPassword(data){
  return http({
    url:'/User/setPassword',
    method:'POST',
    data
  })
}

// 用户钱包
export function userWallet(data){
  return http({
    url:'/User/userWallet',
    method:'POST',
    data
  })
}

// 订单状态
export function orderList(params){
  return http({
    url:'/Order/orderList',
    method:'GET',
    params
  })
}

// 修改订单状态
export function editOrder(params){
  return http({
    url:'/Order/editOrder',
    method:'GET',
    params
  })
}

// 地址列表
export function addressList(params){
  return http({
    url:'/User/addressList',
    method:'GET',
    params
  })
}

// 新增地址/编辑
export function addUserAddress(data){
  return http({
    url:'/User/addUserAddress',
    method:'POST',
    data
  })
}

// 删除地址
export function delAddress(params){
  return http({
    url:'/User/delAddress',
    method:'GET',
    params
  })
}

// 商品信息
export function goodsList(data){
  return http({
    url:'/Goods/goodsList',
    method:'POST',
    data
  })
}

// 商品详情
export function goodsDetail(params){
  return http({
    url:'/Goods/goodsDetail',
    method:'GET',
    params
  })
}

// 商品下单页详情
export function goodsOrderDetail(params){
  return http({
    url:'/Goods/goodsOrderDetail',
    method:'GET',
    params
  })
}

// 添加商品到购物车
export function addCart(data){
  return http({
    url:'/Cart/addCart',
    method:'POST',
    data
  })
}

// 获取购物车数据
export function getCart(params){
  return http({
    url:'/Cart/getCart',
    method:'GET',
    params
  })
}

// 更改购物车商品数量
export function editNum(data){
  return http({
    url:'/Cart/editNum',
    method:'POST',
    data
  })
}

// 清空购物车
export function clearCart(params){
  return http({
    url:'/Cart/clearCart',
    method:'GET',
    params
  })
}