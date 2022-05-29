import React from 'react';
import styleContainer from "../common/styles/Container.module.scss";
import style from './Footer.module.scss'
import Title from "../common/components/title/Title";
import Icon from "./icon/Icon";
import instagramIcon from "../assets/image/instagram.png";
import githubIcon from "../assets/image/github.png";
import telegramIcon from "../assets/image/telegram.png";
import linkedinIcon from "../assets/image/linkedin.png";


const Footer = () => {

    const instagram = {
        backgroundImage: `url(${instagramIcon})`,
    }
    const github = {
        backgroundImage: `url(${githubIcon})`,
    }
    const telegram = {
        backgroundImage: `url(${telegramIcon})`,
    }
    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`,
    }

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title text={'Alex Colibnic'}/>
                <div className={style.footerContacts}>
                    <Icon style={instagram} title={''}/>
                    <Icon style={github} title={''}/>
                    <Icon style={telegram} title={''}/>
                    <Icon style={linkedin} title={''}/>
                </div>
                <div className={style.footerEnd}>© 2022 All Rights Reserved</div>
            </div>
        </div>
    );
};

export default Footer;