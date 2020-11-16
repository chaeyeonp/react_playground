import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Naviagator extends React.Component {
    state = {
        theme: 'light',
        current: '1',
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'light' : 'dark',
        });
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <>
                <Switch
                    checked={this.state.theme === 'light'}
                    onChange={this.changeTheme}
                    checkedChildren="Light"
                    unCheckedChildren="Dark"
                />

                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"

                >
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One" >
                        <Menu.Item key="1" className="tab_day on">Option 1</Menu.Item>
                        <Menu.Item key="2" a href = "#none" className="tab_day">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two" a href = "#none">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three" a href = "#none">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </>
        );
    }
}

export default Naviagator;
