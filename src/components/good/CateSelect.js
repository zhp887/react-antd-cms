import React from 'react'
 
import { Select } from 'antd'
const { Option } = Select

//业务组件（UI组件+业务数据）
//使用 Prop-Types 进行属性验证、默认值

export default class CateSelect extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cates: [
                { id: 1, cate: 'a', cate_zh: '手机数码' },
                { id: 2, cate: 'b', cate_zh: '汽车之家' },
                { id: 3, cate: 'c', cate_zh: '女士服装' },
            ]
        }
    }
    createSelect(){
        let {cates} = this.state
        return cates.map(ele=>(
        <Option key={ele.id} value={ele.cate}>{ele.cate_zh}</Option>
        ))
    }
    render(){
        let { value } = this.props
        value = value || ''
        return(
            <div>
                <Select value={value} onChange={(val)=>this.props.onChange(val)}>
                    { this.createSelect()}
                </Select>
            </div>
        )
    }
}