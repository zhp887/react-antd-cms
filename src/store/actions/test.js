// 封装action，是为了代码复用

import { CHANGE_MSG } from '../actionTypes'
export function changeMsg(payload){
    // 返回一个action
    return{
        type:CHANGE_MSG,
        payload
    }
}