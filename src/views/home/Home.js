import React from 'react'

import { connect } from 'react-redux'
import { changeMsg, cnode } from '@/store/actions/test'
// 把state中的数据，变成当场组件的props
function mapStateToProps(state){
    return{
        msg:state.test.msg,
        msg2:state.todo.msg,
        cnodelist: state.test.cnodelist
    }
}
// 把actions中的方法，放在当前组件的props
// dispatch，这个方法接收一个actions
function mapActionToProps(dispatch){
    return{
        xxx:(payload)=>dispatch(changeMsg(payload)), //{type:1,payload}
        cnodeAjax: (params)=>dispatch(cnode(params)) //发第一个action
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    click(){
        this.props.xxx('hello 1234')
        console.log('ss',this.props.c)
    }
    componentDidMount(){
        // 调接口
        this.props.cnodeAjax({page:1,limit:5,tab:''})
    }
    createCnodeList(){
        return this.props.cnodelist.map(ele=>(
            <div key={ele.id}>
                {ele.title}
            </div>
        ))
    }
    render(){
        console.log('---',this.props.cnodelist)
        return(
            <div>
                <h2>首页</h2>
                <h2>{this.props.msg}</h2>
                <button onClick={this.click.bind(this)}>修改msg</button>
                <hr/>
                <h2>{this.props.msg2}</h2>
                <hr/>
                {this.createCnodeList()}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Home)