import preloader from './../../Users/assets/images/Internet.gif';
import style from './Preloader.module.css';
import React from 'react';

type PropsType = {
    
}

let Preloader: React.FC<PropsType> = (props) => {
    return (
        <div className={style.preloaderWrapper}>
            <img src={preloader} alt={''} className={style.preloader}/>
        </div>
    )
}

export default Preloader;