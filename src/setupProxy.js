const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target:'https://cnodejs.org',//目标服务器
            changeOrigin:true,
        }),
    ),
    app.use(
        '/todo',
        createProxyMiddleware({
            target:'http://10.36.147.34:3000',//目标服务器
            changeOrigin:true,
        })
    )
}