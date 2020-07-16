import axios from './axios'

export function getCnodeList(params){
    return axios({
        url:'/topics',
        method:'get',
        params
    })
}