import style from './Header.module.css';
import { Link } from 'react-router-dom';
import { Avatar, Button, Col, Layout, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { selectIsAuth, selectUserLogin } from './../../redux/auth-selector';

export const AppHeader: React.FC = (props) => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectUserLogin)
    const dispatch = useDispatch()
    const { Header } = Layout;

    const logoutCallBack = () => {
        dispatch(logout());
    }

    return (

        <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
            <Row>
                <Col span={20} className={style.networkTitle}><span>FRIENDS FINDER</span></Col>
                {isAuth ?
                    <>
                        <Col span={1}>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Col>
                        <Col span={3}>
                            <Button onClick={logoutCallBack} >Log out</Button>
                        </Col>
                    </>
                    : <Col span={4}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Col>
                }
            </Row>
        </ Header>
    );
}
