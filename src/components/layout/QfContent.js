/* eslint-disable array-callback-return */
import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import routes from '@/views'

// 状态管理
import { Provider } from 'react-redux'
import store from '@/store'
export default class QfContent extends React.Component{
    constructor(porps){
        super(porps)
        this.state={

        }
    }
    //生成视图容器
    //exact完全匹配
    //Route和Switch是直接父子关系，中间不能其它的元素包裹
    createRoute() {
        var res = []
        routes.map(ele=> {
            res.push(
                <Route
                    key={ele.id}
                    exact
                    path={ele.path}
                    component={ele.component}>
                </Route>
            )
            if (ele.children) {
                ele.children.map(ele => {
                    res.push(
                        <Route
                            key={ele.id}
                            exact
                            path={ele.path}
                            component={ele.component}>
                        </Route>
                    )
                })
            }
        })
        return res
    }
    render(){
        return(
            <div className='qfContent'>
                <Provider store={store}>
                    <Switch>
                        {/* 一组匹配规则，从上到下进行匹配 */}
                        {this.createRoute()}
                        <Redirect from='/*' to='/home'></Redirect>
                    </Switch>
                </Provider>          
            </div>
        )
    }
}