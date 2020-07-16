/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Menu } from 'antd';
import './css/qfSider.scss'
import { createFromIconfontCN } from '@ant-design/icons';
// 路由
import { NavLink } from 'react-router-dom'
import routes from '@/views'
import zhang from '@/assets/images/zhang.jpg'
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
export default class QfSider extends React.Component{
    constructor(porps){
        super(porps)
        this.state={
            id:'1'
        }
    }
    //生成侧边导航
    createNavLink() {
        return routes.map(ele => (
            <Menu.Item key={ele.id} onClick={this.change.bind(this,ele.id)}>
                <IconFont type={ele.icon}/>
                <NavLink exact to={ele.path}>{ele.text}</NavLink> 
            </Menu.Item>
        ))
    }
    change(age){    
       console.log(age)
       this.state.id = age
    }
    render(){
        let {id} = this.state
        return(
            <div className='qfSider'>
                <div className="logo">
                    <h1><img src={zhang}/></h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={id}>
                    {this.createNavLink()}            
                </Menu>
            </div>
        )
    }
}