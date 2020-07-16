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

export function addTodo(payload){
    return{
        type:TODO_ADD,
        payload
    }
}
export function addTodo1(payload){
    return{
        type:TODO_ADD1,
        payload
    }
}
export function addTodo2(payload){
    return{
        type:TODO_ADD2,
        payload
    }
}
export function modify1Todo(payload){
    return{
        type:TODO_MODIFY1,
        payload
    }
}
export function modify2Todo(payload){
    return{
        type:TODO_MODIFY2,
        payload
    }
}
export function delTodo1(payload){
    return{
        type:TODO_DELETE1,
        payload
    }
}
export function delTodo2(payload){
    return{
        type:TODO_DELETE2,
        payload
    }
}

export function editTodo(payload){
    return{
        type:TODO_UPDATE,
        payload
    }
}

export function clearTodo(payload){
    return{
        type:TODO_CLEAR,
        payload
    }
}