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
export default class QfContent extends React.Component {
    constructor(porps) {
        super(porps)
        this.state = {

        }
    }
    // 生成视图容器
    createRoutes() {
        let res = []
        // 递归函数
        function create(arr) {
            arr.map(ele => {
                res.push(
                    <Route
                        exact
                        path={ele.path}
                        component={ele.component}
                        key={ele.id}>
                    </Route>
                )
                // 递归一定要有结束条件
                if (ele.children) {
                    create(ele.children)
                }
                return false
            })
        }
        // 调用递归
        routes.map(ele => {
            create(ele.children)
            return false
        })
        return res
    }
    render() {
        return (
            <div className='qfContent'>
                <Provider store={store}>
                    <Switch>
                        {/* 一组匹配规则，从上到下进行匹配 */}
                        {this.createRoutes()}
                        <Redirect from='/*' to='/'></Redirect>
                    </Switch>
                </Provider>
            </div>
        )
    }
}