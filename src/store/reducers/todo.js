import {
    TODO_ADD,
    TODO_ADD1,
    TODO_DELETE,
    TODO_UPDATE,
    TODO_EDIT,
  } from '../actionTypes'

let initState = {
    msg: 'hello todo',
    list: [],
}
export default function reducer(state=initState,action){
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        //添加
        case TODO_ADD:
            // state只读的
            // 另外两只深复制的方法，推荐第一种
            // let newState = Object.assign({}, state)
            // let newState = {...state}
            // newState.list1.push(action.payload)
            return {...state,...{list:newState.list}}
        case TODO_ADD1:
            return {...state,...{list:action.payload}}
        case TODO_DELETE:
            return {...state,...{list:newState.list}}
        case TODO_UPDATE:
            return {...state,...{list:newState.list}}
        case TODO_EDIT:
            console.log('走到这里了',newState)
            return {...state,...{list:newState.list}}
        default:
            return state
    }
}