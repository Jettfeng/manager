import React from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
const FormItem = Form.Item;
class FormLogin extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input prefix={<Icon type="user" />} placeholder="晴输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" />} placeholder="晴输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    <Form style={{ width: 300 }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'Jack',
                                    reles: []
                                })(<Input prefix={<Icon type="user" />} placeholder="晴输入用户名" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '123456',
                                    reles: []
                                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="晴输入用户名" />)
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" style={{ width: 300 }}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormLogin)