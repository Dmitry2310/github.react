import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
        <img src ='https://pixy.org/src/11/thumbs350/119344.jpg'></img>
        <span>Friends Finder</span>
        </header>);
}

export default Header;