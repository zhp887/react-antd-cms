import { addTodoList,getMyTodos,deleteTodo,changeTodoStatus,editsTodo } from '@/utils/api'
import {
    TODO_ADD,
    TODO_ADD1,
    TODO_UPDATE,
    TODO_DELETE,
    TODO_EDIT
  } from '../actionTypes'
// 添加
export function addTodo(data){
    return function(dispatch){
        addTodoList(data).then(res=>{
            dispatch({
                type:TODO_ADD,
                payload:res
            })
        }).catch(err=>{
            dispatch({
                type:TODO_ADD,
                payload:err
            })
        })
    }
}
// 刷新列表
export function myTodo(params){
    return function(dispatch){
        getMyTodos(params).then(res=>{
            dispatch({
                type:TODO_ADD1,
                payload:res
            })
        }).catch(err=>{
            dispatch({
                type:TODO_ADD1,
                payload:''
            })
        })
    }
}
// 删除
export function delTodo(params){
    return function(dispatch){
        deleteTodo(params).then(res=>{
            dispatch({
                type:TODO_DELETE,
                payload:res
            })
        })
    }
}
//修改任务状态
export function updateTodo(params){
    return function(dispatch){
        changeTodoStatus(params).then(res=>{
            dispatch({
                type:TODO_UPDATE,
                payload:res
            })
        })
    }
}
// 修改任务名称
export function editTodo(data){
    return function(dispatch){
        editsTodo(data).then(res=>{
            dispatch({
                type:TODO_EDIT,
                payload:res
            })
        })
    }
}
export function addTodo1(payload){
    return{
        type:TODO_ADD1,
        payload
    }
}
