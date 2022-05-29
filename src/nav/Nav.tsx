import React from 'react';
import style from './Nav.module.scss'

type PropsType = {
    title: string
}

const Nav = (props: PropsType) => {
    return (
        <div className={style.nav}>
            <a href="" className={style.link}>{props.title}</a>
        </div>
    );
};

export default Nav;