import React, { Component } from 'react';
import { Icon } from "antd";

class Logo extends Component {
    layoutStyle = {
        fontSize: 30,
        padding: '0 10px',
        textAlign: 'center'
    }
    render() {
        return (
            <div style={this.props.layoutStyle ? this.props.layoutStyle : this.layoutStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Logo;