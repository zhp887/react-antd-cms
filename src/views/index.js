
import loadable from '@loadable/component'

const Home = loadable(()=>import('./home/Home'))
const Commodity = loadable(()=>import('./home/Commodity'))
const Todo = loadable(()=>import('./todo/Todo'))
const Good = loadable(()=>import('./good/Good'))
const GoodAdd = loadable(()=>import('./good/GoodAdd'))
export default[
    {
        id:1,
        icon:'icon-facebook',
        title:'统计概况',
        children:[
            {
                id:101,
                path:'/',
                component:Home,
                text:'首页管理',
            },
            {
                id:102,
                path:'/commodity',
                component:Commodity,
                text:'商品管理',
                children:[]
            }
        ]
    },
    {
        id:2,
        icon:'icon-twitter',
        component:Todo,
        title:'文本管理',
        children:[
            {
                id:201,
                path:'/todo',
                component:Todo,
                text:'文本编辑',
            }
        ]
    },
    {
        id:3,
        icon:'icon-twitter',
        component:Good,
        title:'商品管理',
        children:[
            {
                id:301,
                path:'/good',
                component:Good,
                text:'商品列表',
            },
            {
                id:302,
                path:'/goodAdd',
                component:GoodAdd,
                text:'商品添加',
            }
        ]
    }
]