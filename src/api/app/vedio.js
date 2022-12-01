import request from '@/utils/request';

export function getlist(data){
    return request({
        url: '/api/1.0/monitormachine/list',
        method: 'post',
        data
    })
}

export function getToken(){
    return request({
        url: '/hktoken/reload',
        method: 'post'
    })
}