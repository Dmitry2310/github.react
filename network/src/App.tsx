import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Logo from './components/Header/assets/logo.png';
import style from './components/Navbar/Navbar.module.css';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { BarsOutlined, CustomerServiceOutlined, MailOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { AppHeader } from './components/Header/Header';
import { UsersPage } from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { Switch } from 'react-router-dom';
import { LoginPage } from './components/Login/login';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Preloader from './components/common/preloader/Preloader';
import { WithSuspense } from './components/hoc/withSuspense';
import { AppStateType } from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPage = React.lazy(() => import('./components/pages/Chat/ChatPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
  initializeApp: () => void
}
type PropsType = MapPropsType & MapDispatchPropsType

const SuspendedDialogsContainer = WithSuspense(DialogsContainer);
const SuspendedConteinerProfile = WithSuspense(ProfileContainer);
const SuspendedChatPage = WithSuspense(ChatPage);
const { Content, Footer, Sider } = Layout;

class App extends React.Component<PropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.inicialization) { return <Preloader /> }

    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <img src={Logo} alt={''} style={{ width: 60, marginLeft: 60}}></img>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ marginTop: 0, position: "sticky", top: "0" }}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <div className={style.item}><Link to='/profile'>Profile</Link></div>
            </Menu.Item>
            <Menu.Item key="2" icon={<MailOutlined />}>
              <div className={style.item}><Link to='/dialogs'>Messages</Link></div>
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}>
              <div className={style.item}><Link to='/users' >Friends</Link></div>
            </Menu.Item>
            <Menu.Item key="4" icon={<CustomerServiceOutlined />}>
              <div className={style.item} ><a >Music</a></div>
            </Menu.Item>
            <Menu.Item key="5" icon={<BarsOutlined />}>
              <div className={style.item} ><Link to='/chat' >Chat</Link></div>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <AppHeader />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div className='content' style={{ minHeight: '100vh' }}>
                <Switch>
                  <Route exact path='/' render={() => WithSuspense(ProfileContainer)}></Route>
                  <Route path='/profile/:userId?' render={() => <SuspendedConteinerProfile />}></Route>
                  <Route path='/dialogs' render={() => <SuspendedDialogsContainer />}></Route>
                  <Route path='/users' render={() => < UsersPage />}></Route>
                  <Route path='/chat' render={() => <SuspendedChatPage/>}></Route>
                  <Route path='/login' render={() => < LoginPage />}></Route>
                </Switch>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Network Design ©2022 Created by Dmitry</Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  inicialization: state.app.inicialization
})

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App);