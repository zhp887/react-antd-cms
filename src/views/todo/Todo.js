import React from 'react'
import './Todo.scss'
import { connect } from 'react-redux'
import { 
    addTodo,
    addTodo1,
    addTodo2,
    modify1Todo,
    modify2Todo,
    delTodo1,
    delTodo2,
    editTodo,
    clearTodo 
} from '@/store/actions/todo'

function mapStateToProps(state){
    return{
        todolist1:state.todo.list1,
        todolist2:state.todo.list2

    }
}
function mapActionToProps(dispatch){
    return {
        addTodo:(payload)=>dispatch(addTodo(payload)),
        addTodo1:(payload)=>dispatch(addTodo1(payload)),
        addTodo2:(payload)=>dispatch(addTodo2(payload)),
        modify1Todo:(payload)=>dispatch(modify1Todo(payload)),
        modify2Todo:(payload)=>dispatch(modify2Todo(payload)),
        delTodo1:(payload)=>dispatch(delTodo1(payload)),
        delTodo2:(payload)=>dispatch(delTodo2(payload)),
        editTodo:(payload)=>dispatch(editTodo(payload)),
        clearTodo:(payload)=>dispatch(clearTodo(payload))
    }
}
class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            task:'',
            task1:'',
            task2:''
        }
    }
    componentDidMount(){
        console.log('props',this.props)
    }
    // 添加文本
    inputChange(e){
        this.setState({
            task:e.target.value
        })
    }
    inputEnter(e){
        let { task } = this.state
        if (e.keyCode === 13) {
            if (task === '') {
                alert('请输入内容')
                return
            }else{
                  // 添加一条todo
                this.props.addTodo({id:Date.now(),task})
                this.setState({task:''})
            }
        }
    }
    // 编辑文本未完成
    changeHandle1(e){
        this.setState({
            task1:e.target.value
        })
    }
    keyUpHandle1(id,e){
        let { task1 } = this.state
        if (e.keyCode === 13) {
            if (task1 === '') {
                alert('请输入内容')
                return
            }else{
                  // 添加一条todo
                this.props.modify1Todo({id,task:task1})
            }
        }
    }
     // 编辑文本已经完成
    changeHandle2(e){
        this.setState({
            task1:e.target.value
        })
    }
    keyUpHandle2(id,e){
        let { task2 } = this.state
        if (e.keyCode === 13) {
            if (task2 === '') {
                alert('请输入内容')
                return
            }else{
                  // 添加一条todo
                this.props.modify2Todo({id,task:task2})
            }
        }
    }
    // 改状态
    todo1Handle(jian){
        this.props.addTodo2(jian)
        this.props.delTodo1(jian.id)
    }
    todo2Handle(jian){
        this.props.addTodo1(jian)
        this.props.delTodo2(jian.id)
    }
    // 删除文本
    deleteTodo1(id){
        this.props.delTodo1(id)
    }
    deleteTodo2(id){
        this.props.delTodo2(id)
    }
    // 清除todo
    clearTodo(){
        this.props.clearTodo()
    }
    // 渲染todolist
    //正在进行
    createTodoList1(){
        let { todolist1 } = this.props
        return todolist1.map(ele=>(
            <li key={ele.id}>
                <input type='checkbox' onClick={this.todo1Handle.bind(this,ele)} />
                <p>
                    <input 
                      type='text' 
                      defaultValue={ele.task} 
                      onChange={this.changeHandle1.bind(this)}
                      onKeyUp={this.keyUpHandle1.bind(this,ele.id)}/>
                </p>
                <span onClick={this.deleteTodo1.bind(this,ele.id)}>-</span>
            </li>
        ))
    }
    // 已经完成
    createTodoList2(){
        let { todolist2 } = this.props
        return todolist2.map(ele=>(
            <li key={ele.id}>
                <input type='checkbox' defaultChecked onClick={this.todo2Handle.bind(this,ele)} />
                <p>
                    <input 
                      type='text' 
                      defaultValue={ele.task} 
                      onChange={this.changeHandle2.bind(this)}
                      onKeyUp={this.keyUpHandle2.bind(this)}/>
                </p>
                <span onClick={this.deleteTodo2.bind(this,ele.id)}>-</span>
            </li>
        ))
    }
    render(){
        let { task } = this.state
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
                    <h2>正在进行<span>{this.props.todolist1.length}</span></h2>
                    <ol id="todolist" className="demo-box">
                       {this.createTodoList1()}
                    </ol>
                    <h2>已经完成<span>{this.props.todolist2.length}</span></h2>
                    <ul id="donelist" >
                        {this.createTodoList2()}
                    </ul>
                </div>
                <div className='footer'>
                    Copyright © 2014 todolist.cn  
                    <span onClick={this.clearTodo.bind(this)}>clear</span>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapActionToProps)(Todo)