import style from './Header.module.css';
import Logo from './assets/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={Logo}></img>
            <span>FRIENDS FINDER</span>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <button onClick={props.logout} >Log out</button>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>);
}

export default Header;