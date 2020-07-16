/* eslint-disable array-callback-return */
import React from 'react';
import '@/assets/style/common.scss'
import { getCnodeList } from '@/utils/api'
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

// 路由
import { HashRouter } from 'react-router-dom'
import {QfLayout} from '@/components'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      list:[]
    }
  }
  componentDidMount(){
    let params = {
      tab:'',
      page:1,
      limit:5
    }
    getCnodeList(params).then(res=>{
      console.log('res',res)
    })
  }

  render(){
    return (
     <HashRouter>
       <div className='app'>
         {/* <Switch>
           {this.createRoutes()}
           <Redirect from='/*' to='/home'></Redirect>
         </Switch> */}
       <QfLayout></QfLayout>
       </div>
     </HashRouter>
    )
  } 
}

