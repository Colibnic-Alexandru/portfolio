import React from 'react';
import style from './Header.module.scss'
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={style.header}>
            <Nav title={'Home'}/>
            <Nav title={'Skill'}/>
            <Nav title={'Project'}/>
            <Nav title={'Contact'}/>
        </div>
    );
};

export default Header;