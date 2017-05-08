import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'

export default class MenuBar extends Component {
    constructor() {
        super()
        this.state = { current: 'first' }
    }

    handleClick(e) {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="first">
                    <Link to="/" activeStyle={{color:'red'}}>Home</Link>
                </Menu.Item>
                <Menu.Item key="second">
                    <Link to="/about" activeStyle={{color:'red'}}>About</Link>
                </Menu.Item>
            </Menu>
        )
    }
}