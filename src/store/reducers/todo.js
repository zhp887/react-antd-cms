import {
    TODO_ADD,
    TODO_ADD1,
    TODO_ADD2,
    TODO_MODIFY1,
    TODO_MODIFY2,
    TODO_UPDATE,
    TODO_DELETE1,
    TODO_DELETE2,
    TODO_CLEAR
  } from '../actionTypes'

let initState = {
    msg: 'hello todo',
    list1: [
        // {id:1, task: '学习1'},
        // {id:2, task: '学习2'}
    ],
    list2: [
        // {id:3, task: '学习3'},
        // {id:4, task: '学习4'}
    ]
}
export default function reducer(state=initState,action){
    switch (action.type) {
        //添加
        case TODO_ADD:
            // state只读的
            let newState = JSON.parse(JSON.stringify(state))
            // 另外两只深复制的方法，推荐第一种
            // let newState = Object.assign({}, state)
            // let newState = {...state}
            newState.list1.push(action.payload)
            return newState
        case TODO_ADD1:
            let newState3 = JSON.parse(JSON.stringify(state))
            newState3.list1.push(action.payload)
            return newState3
        case TODO_ADD2:
            let newState4 = JSON.parse(JSON.stringify(state))
            newState4.list2.push(action.payload)
            return newState4
        case TODO_MODIFY1:
            let newState5 = JSON.parse(JSON.stringify(state))
            newState5.list1.map((ele,idx,arr)=>{
                if (ele.id === action.payload.id) {
                    arr.splice(idx,1,action.payload)
                }
                return false
            })
            return newState5
        case TODO_MODIFY2:
            let newState6 = JSON.parse(JSON.stringify(state))
            newState6.list2.map((ele,idx,arr)=>{
                if (ele.id === action.payload.id) {
                    arr.splice(idx,1,action.payload.task)
                }
                return false
            })
            return newState6
        case TODO_UPDATE:
            return state
        case TODO_DELETE1:
            let newState1 = JSON.parse(JSON.stringify(state))
            newState1.list1.map((ele,idx,arr)=>{
                if (ele.id === action.payload) {
                    arr.splice(idx,1)
                }
                return false
            })
            return newState1
        case TODO_DELETE2:
            let newState2 = JSON.parse(JSON.stringify(state))
            newState2.list2.map((ele,idx,arr)=>{
                if (ele.id === action.payload) {
                    arr.splice(idx,1)
                }
                return false
            })
            return newState2
        case TODO_CLEAR:
            let newState7 = JSON.parse(JSON.stringify(state))
            newState7.list1 = []
            newState7.list2 = []
            return newState7
        default:
            return state
    }
}