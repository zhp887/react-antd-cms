import { createStore,combineReducers } from 'redux'
// 分模块后的子reducer
import testReducer from './reducers/test'
import todoReducer from './reducers/todo'

// 把多个子reducer函数，合并成一个reducer
const reducer = combineReducers({
    test:testReducer,
    todo:todoReducer
})
// 创建一个store，第一个参数是必填，它是reducer
const store = createStore(reducer)

export default store