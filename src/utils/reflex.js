/**
 * 保存全局映射
 */

 // 支付方式
 export const rechargeType = () => ([
   { value: 1,key: '支付宝' },
   { value: 2,key: '微信' },
   { value: 3,key: '现金' },
 ])

 // 支付状态
 export const reflexPay = () => ([
   { value: 1,key: '未到账' },
   { value: 2,key: '已到账' }
 ])