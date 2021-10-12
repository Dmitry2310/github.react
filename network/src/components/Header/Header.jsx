import style from './Header.module.css';
import Logo from './assets/logo.png';

const Header = () => {
    return (
        <header className={style.header}>
        <img src ={Logo}></img>
        <span>FRIENDS FINDER</span>
        </header>);
}

export default Header;