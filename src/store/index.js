import { createStore, combineReducers ,applyMiddleware } from 'redux'
// 用于把异步行为(比如调接口)的action转化成三个同步的action
import thunk from 'redux-thunk' 
// 分模块后的子reducer
import testReducer from './reducers/test'
import todoReducer from './reducers/todo'

// 把多个子reducer函数，合并成一个reducer
const reducer = combineReducers({
    test:testReducer,
    todo:todoReducer
})
// 创建一个store，第一个参数是必填，它是reducer
const store = createStore(reducer, applyMiddleware(thunk))

export default store