import React from 'react'
import { Layout } from 'antd';
import './css/qfLayout.scss'

import { QfSider, QfHeader, QfContent } from '..';
const { Header, Sider, Content } = Layout;

export default class QfLayout extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <Layout className='qfLayout'>
                <Sider width={170}>
                    <QfSider />
                </Sider>
                <Layout>
                    <Header>
                        <QfHeader />
                    </Header>
                    <Content>
                        <QfContent />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}