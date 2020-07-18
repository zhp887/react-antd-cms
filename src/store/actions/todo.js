import { addTodoList,getMyTodos,deleteTodo,changeTodoStatus,editsTodo } from '@/utils/api'
import {
    TODO_ADD,
    TODO_ADD1,
    TODO_UPDATE,
    TODO_DELETE,
    TODO_EDIT
  } from '../actionTypes'
// ���
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
// ˢ���б�
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
// ɾ��
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
//�޸�����״̬
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
// �޸���������
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
