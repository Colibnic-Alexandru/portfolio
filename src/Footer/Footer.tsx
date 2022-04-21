import React from 'react';
import styleContainer from "../Common/Styles/Container.module.css";
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Alex Colibnic</h2>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div className={style.title}>
                    Все Права защищены
                </div>
            </div>
        </div>
    );
};

export default Footer;