import axios from './axios'

function getCnodeList(params){
    return axios({
        url:'/api/v1/topics',
        method:'get',
        params
    })
}
// 获取我的任务列表（待完成、已完成）
function getMyTodos(params){
    return axios({
        url:'/todo/getMyTodos',
        method:'get',
        params
    })
}
// 新增todo
function addTodoList(data){
    return axios({
        url:'/todo/addTodo',
        method:'post',
        data
    })
}
// 删除一条todo
function deleteTodo(params){
    return axios({
        url:'/todo/deleteTodo',
        method:'get',
        params
    })
}
// 任务状态切换
function changeTodoStatus(params){
    return axios({
        url:'/todo/changeTodoStatus',
        method:'get',
        params
    })
}
//修改任务名称
function editsTodo(data){
    return axios({
        url:'/todo/editTodo',
        method:'post',
        data
    })
}
export{
    getCnodeList,
    getMyTodos,
    addTodoList,
    deleteTodo,
    changeTodoStatus,
    editsTodo
}