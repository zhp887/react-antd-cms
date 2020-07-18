import React from 'react'
import { Form, Input, Button, InputNumber ,Switch,Row, Col,Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CateSelect } from '@/components'
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
export default class GoodAdd extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    cateSelect(val){
        this.setState({cate:val})
    }
    onFinish(value) {
        console.log('提交', value)
      }
    render(){
        return(
            <div className='goodAdd'>
               <h2>商品添加</h2>
               <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish.bind(this)}>
                    <Row>
                        <Col span={22} push={1}>
                            <Form.Item
                                label="商品照片"
                                name="goodphoto"
                                rules={[{ required: false, message: '请输入商品照片地址！' }]}
                            >
                                <Input placeholder='输入商品的照片地址' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} push={1}>
                            <Form.Item
                                label="商品名称"
                                name="goodname"
                                rules={[{ required: true, message: '请输入商品名称！' }]}
                            >
                                <Input placeholder='输入商品的名称' />
                            </Form.Item>
                        </Col>
                        <Col span={13} push={2}>
                            <Form.Item
                                label="商品描述"
                                name="gooddesc"
                                rules={[{ required: true, message: '请输入商品描述！' }]}
                            >
                                <Input placeholder='输入商品的描述' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5} push={1}>
                            <Form.Item
                                label="品类选择"
                                name="goodcate"
                                rules={[{ required: true ,message: '请进行品类选择！'}]}
                            >
                                <CateSelect
                                    value={this.state.cate}
                                    onChange={this.cateSelect.bind(this)}>

                                </CateSelect>
                            </Form.Item>
                        </Col>
                        <Col span={5} push={5}>
                            <Form.Item
                                label="商品价格"
                                name="goodprice"
                                rules={[{ required: true, message: '请输入商品价格！' }]}
                            >
                                <InputNumber
                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                    />
                            </Form.Item>
                        </Col>
                    </Row>    
                    <Row>
                    <Col span={6} push={1}>
                            <Form.Item
                                label="照片上传"
                                name="goodzhaopian"
                                valuePropName='checked'
                                rules={[{ required: true,message: '请上传照片！' }]}
                            >
                                <Upload {...props}>
                                    <Button>
                                    <UploadOutlined /> Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col span={4} push={4}>
                            <Form.Item
                                label="是否推荐"
                                name="goodhot"
                                valuePropName='checked'
                                rules={[{ required: false }]}
                            >
                                <Switch />
                            </Form.Item>
                        </Col>
                    </Row>    
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        确定
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}