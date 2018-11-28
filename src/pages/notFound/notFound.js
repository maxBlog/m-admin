import React, { Component } from 'react';
import { Layout } from 'antd'

class NotFound extends Component {
    render() {
        console.log(this.props);
        return (
            <Layout>
                404 page not found
            </Layout>
        );
    }
}

export default NotFound;