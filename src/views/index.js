
import loadable from '@loadable/component'

const Home = loadable(()=>import('./home/Home'))
const Commodity = loadable(()=>import('./home/Commodity'))
const Todo = loadable(()=>import('./todo/Todo'))
export default[
    {
        id:1,
        icon:'icon-facebook',
        path:'/home',
        component:Home,
        text:'首页管理',
        children:[]
    },
    {
        id:2,
        icon:'icon-tuichu',
        path:'/commodity',
        component:Commodity,
        text:'商品管理',
        children:[]
    },
    {
        id:3,
        icon:'icon-tuichu',
        path:'/todo',
        component:Todo,
        text:'文本编辑',
        children:[]
    }
]