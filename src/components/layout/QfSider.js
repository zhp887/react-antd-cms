/* eslint-disable react/no-direct-mutation-state */

/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
// 路由
import { NavLink } from 'react-router-dom'
import routes from '@/views'
import zhang from '@/assets/images/zhang.jpg'
const { SubMenu } = Menu
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
export default class QfSider extends React.Component{
    constructor(porps){
        super(porps)
        this.state={
            id:'101'
        }
    }
     // 生成菜单
    createLinks() {
        return routes.map(ele=>(
        <SubMenu key={ele.id} title={ele.title} icon={<IconFont type={ele.icon} />} >
            { this.createMenuItem(ele.children) }
        </SubMenu>
        ))
    }
    // 生成二级菜单
    createMenuItem(children) {
        return children.map(ele=>(
        <Menu.Item key={ele.id} onClick={this.change.bind(this,ele.id)}>
            <NavLink to={ele.path}>{ ele.text }</NavLink>
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={id} defaultOpenKeys={['1']}>
                    {this.createLinks()}            
                </Menu>
            </div>
        )
    }
}