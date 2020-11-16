import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import {Layout, Menu} from 'antd';
import Main from "./container/Main";
import Home from "./container/Home";
import User from './container/User';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App() {
    return (
        <Router>
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/post/:postId" component={Home}/>
                        <Route exact path="/user/:userId" component={User}/>


                    </Header>


                </Layout>

            </div>
        </Router>
    )
}

export default App
