import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import mainImage from "../assets/image/mainPhoto.jpg";

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Alex Colibnic</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and ' +
                        'typesetting industry. Lorem Ipsum has been the industry ' +
                        's standard dummy text ever since the 1500s</p>
                </div>
                <div>
                    <img className={style.photo} src={mainImage} alt={''}/>
                </div>
            </div>
        </div>
    );
};

export default Main;