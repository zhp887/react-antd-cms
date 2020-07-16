/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import { CHANGE_MSG } from '../actionTypes'
let initState = {
    msg:'hello redux',
    list:[]
}

// action的作用，给reducer一个改变数据的信号
// 你要改变那个变量
// 你改的结果是什么？
export default function reducer(state=initState,action){
    switch(action.type){
        case CHANGE_MSG:
            console.log('收到了',action)
            // 深复制
            let newSatate = JSON.parse(JSON.stringify(state))
            newSatate.msg = action.payload
            //改变msg
            return newSatate
        case 2:
            //增加一条todo
            // state.list.push(action.payload)
            return state
        case 3:
            //删除一条todo
            state.list.splice(action.payload,1)
            return state
        default:
            return state
    }
}