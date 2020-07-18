## React项目安装
1、安装命令：
  ```
  cnpm install create-react-app -g
  ```
2、创建React项目：
  create-react-app 项目名

3、执行命令：
  npm start 验证React项目是否安装成功

4、执行命令：
  npm run eject 把脚手架原本隐藏封装的脚本，还原回来
  注意：在执行eject时，会报错。
  解决：先创建本地git仓库，并把代码进行本地提交。
  ```
  cd react-antd-cms
  git add .
  git commit -m 'first commit'
  npm run eject
  ```
5、安装sass
  ```
  cnpm install node-sass -D
  cnpm install sass-loader -D
  ```
6、安装axios
  ```
  cnpm install axios -S
  ```
7、安装react-router-dom
  ```
  cnpm install react-router-dom -S
  ```
8、安装antd
  ```
  cnpm install antd -S
  ```

## 环境
1、自定义端口号
  /scripts/start.js 搜索PORT

2、配置@别名
  /config/webpack.config.js里找到resolve.alias

3、favicon制作
  找免费在线制作网站，下载32*32的尺寸。

4、sass安装
  只用安装node-sass这个包即可。

5、本地环境怎么配置代码
  安装 cnpm install http-proxy-middleware -D
  新建代理文件 src/setupProxy.js
  ```
  const { createProxyMiddleware } = require('http-proxy-middleware');
  module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://xxx.com',   // 目标服务器
        changeOrigin: true
      })
    );
  };
  ```
  重启服务

## redux
  action 触发行为，主要的作用是用来触发数据改变的行为
  reducer  它的作用就是用来改变store中的数据
  store 这是共享数据的存储中心
1、安装
  ```
  cnpm install redux -S   // 创建store
  ```
2、在src/store/index.js创建store并抛出
  ```
  import { createStore } from 'redux'
  // 创建store，必须要传第一个参数是reducer，它是一个纯函数，其作用是用来改变store的
  const store = createStore(reducer)
  export default store
  ```
3、定义reducer
  ```
  // 定义reducer需要两个参数，分别是当前需要被共享的state、用于改变state的action信号
  // action={type, payload}，type用于指明你想做什么，payload指明你想得到的结果。
  function reducer(state={}, action) {
    switch(action.type) {
      case '1':
        return state
      case '2':
        return state
      default:
        return state
    }
  }
  ```
4、 在App.js中进行上下文关联
  ```
  cnpm install react-redux -S   // 把store与react组件关联起来
  ```    
在App.js中引入store，并使用上下文进行关联
  ```
  import { Provider } from 'react-redux'
  import store from '@/store'

  return(
    <Provider store={store}></Provider>
  )
  ```
5、在页面组件中使用store
  ```
  import { connect } from 'react-redux'

  // 把state中的数据，变成当成组件的props
  function mapStateToProps(state){
    return {
      msg: state.msg
    }
  }
  // 把actions中方法，放在当前组件的props
  function mapActionToProps(dispatch) {
    return {
      changeMsg: ()=>{
        // 派发一个action到reducer去
        console.log('changeMsg')
      }
    }
  }
  export default connect(mapStateToProps,mapActionToProps)(Home)
  ```
6、redux异步action
  redux默认只支持同步的action。那么异步的action行为(比如调接口)该怎么办呢？
  需要使用第三方中间件(redux-thunk)，把一步异步的action转化成三个同步的action，以此来解决“redux只支持同步action”特点。
  这三个同步的action，分别是：第一个action的作用告诉reducer有一个异步行为触发;第二个action告诉reducer异步行为执行成功了，可以更新state了;第三个action是告诉reducer这个异步行为失败了。

7、面试相关
  你如何理解redux？ flux、 地位、三个概念，单向数据流。
  store特点：单一数据源、只读、使用纯函数reducer进行修改。
  react-redux：Provider connect(mapStateToProps,mapActionToProps)
  redux中间件：redux-thunk
  dispatch()发送一个action到reducer
这个项目是 [Create React App](https://github.com/facebook/create-react-app).

## 可用脚本

在项目目录中, you can run:

### `yarn start`

以开发模式运行应用程序.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

如果您进行编辑，页面将重新加载.<br />
您还将在控制台中看到任何lint错误.

### `yarn test`

以交互监视模式启动测试运行程序.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
