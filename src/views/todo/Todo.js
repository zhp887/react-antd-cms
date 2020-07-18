import React from 'react'
import './Todo.scss'
import { connect } from 'react-redux'
import { 
    addTodo,
    myTodo,
    delTodo,
    updateTodo,
    editTodo,
    addTodo1,
} from '@/store/actions/todo'

function mapStateToProps(state){
    return{
        todolist:state.todo.list
    }
}
function mapActionToProps(dispatch){
    return {
        addTodo:(data)=>dispatch(addTodo(data)),
        myTodo: (params)=>dispatch(myTodo(params)), //发第一个action
        delTodo:(params)=>dispatch(delTodo(params)),
        updateTodo:(params)=>dispatch(updateTodo(params)),
        editTodo:(data)=>dispatch(editTodo(data)),
        addTodo1:(payload)=>dispatch(addTodo1(payload)),
    }
}
class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            task:'',
            task1:'',
        }
    }
    componentDidMount(){
      this.initList()
    }
    // 添加文本
    inputChange(e){
        this.setState({
            task:e.target.value
        })
    }
    initList(){
        let params = {
            userId:'BJ200113003'
        }
        this.props.myTodo(params)
    }
    inputEnter(e){
        let { task } = this.state
        if (e.keyCode === 13) {
            if (task === '') {
                alert('请输入内容')
                return
            }else{
                  // 添加一条todo
                  let data = {
                    userId:'BJ200113003',
                    task
                  }
                this.props.addTodo(data)
                this.setState({task:''})
                this.initList()
            }
        }
    }
     // 删除文本
     deleteTodo(id){
        let params = {
            userId:'BJ200113003',
            id
        }
        this.props.delTodo(params)
        this.initList()
    }
     //修改任务状态
     todoHandle(ele,status){
         let params = {
            userId:'BJ200113003',
            id:ele._id,
            status,
         }
         this.props.updateTodo(params)
         this.initList()
    }
    // 修改任务名称
    changeHandle(e){
        if (e.target.value) {
            this.setState({
                task1:e.target.value
            })  
        }
    }
    KeyUpHandle(ele,e){
        let { task1 } = this.state
        if (e.keyCode === 13) {
            if (ele.task === '' && task1 === '') {
                alert('请输入内容')
                return
            }else{
                let data = {
                    userId:'BJ200113003',
                    id:ele._id,
                    task:task1
                }
                console.log(data)
                this.props.editTodo(data)
            }
        }
    }
    //正在进行
    createTodoList1(){
        // console.log(this.props.todolist.undone)
        let { todolist } = this.props
        if (todolist.undone) {
            return todolist.undone.map(ele=>(
                <li key={ele._id}>
                    <input type='checkbox' onClick={this.todoHandle.bind(this,ele,1)} />
                    <p>
                        <input 
                        type='text' 
                        defaultValue={ele.task} 
                        onChange={this.changeHandle.bind(this)}
                        onKeyUp={this.KeyUpHandle.bind(this,ele)}/>
                    </p>
                    <span onClick={this.deleteTodo.bind(this,ele._id)}>-</span>
                </li>
            ))
        }
        
    }
    // 已经完成
    createTodoList2(){
        let { todolist } = this.props
        if (todolist.done) {
            return todolist.done.map(ele=>(
                <li key={ele._id}>
                    <input type='checkbox' defaultChecked onClick={this.todoHandle.bind(this,ele,0)} />
                    <p>
                        <input 
                          type='text' 
                          defaultValue={ele.task} 
                          onChange={this.changeHandle.bind(this)}
                          onKeyUp={this.KeyUpHandle.bind(this,ele)}/>
                    </p>
                    <span onClick={this.deleteTodo.bind(this,ele._id)}>-</span>
                </li>
            ))
        }
    }
    render(){
        let { task } = this.state
        let { undone,done } = this.props.todolist
        return(
            <div className='todo'>
                <div className='header'>
                    <div className='top'>
                        <label htmlFor="title">ToDoList</label>
                        <input 
                          type="text" 
                          id="title" 
                          name="title" 
                          value={task}
                          onChange={this.inputChange.bind(this)}
                          onKeyUp={this.inputEnter.bind(this)}
                          placeholder="添加ToDo" 
                          required="required" />
                    </div>
                </div>
                <div className='section'>
                    <h2>正在进行<span>{undone ? undone.length : 0}</span></h2>
                    <ol id="todolist" className="demo-box">
                       {this.createTodoList1()}
                    </ol>
                    <h2>已经完成<span>{done ? done.length : 0}</span></h2>
                    <ul id="donelist" >
                        {this.createTodoList2()}
                    </ul>
                </div>
                <div className='footer'>
                    Copyright © 2014 todolist.cn  
                    <span>clear</span>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapActionToProps)(Todo)