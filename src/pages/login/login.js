import React, { Component } from 'react'
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';
import "./style.styl"
const FormItem = Form.Item;

class LoginForm extends Component {

    loginAction = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('===>>>', values);
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout className="layout-login-container">
                <Form onSubmit={this.loginAction} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '密码6～18位', min: 6 }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 录
                        </Button>
                    </FormItem>
                </Form>
            </Layout>
        )
    }
}

const Login = Form.create()(LoginForm);
export default Login;
