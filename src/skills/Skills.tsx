import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/title/Title";
import Skill from "./skill/Skill";
import jsImage from "../assets/image/js.png";
import cssImage from "../assets/image/css.png";
import reactImage from "../assets/image/react.png";
import htmlFileImage from "../assets/image/html-file.png";
import reduxImage from "../assets/image/redux.png";


const Skills = () => {

    const description = 'Lorem Ipsum is simply dummy text of the printing and ' +
        'typesetting industry. Lorem Ipsum has been the industry ' +
        's standard dummy text ever since the 1500s'

    const js = {
        backgroundImage: `url(${jsImage})`,
    }
    const css = {
        backgroundImage: `url(${cssImage})`,
    }
    const react = {
        backgroundImage: `url(${reactImage})`,
    }
    const html = {
        backgroundImage: `url(${htmlFileImage})`,
    }
    const redux = {
        backgroundImage: `url(${reduxImage})`,
    }

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill style={js} title={'JS'} description={description}/>
                    <Skill style={css} title={'CSS'} description={description}/>
                    <Skill style={html} title={'HTML'} description={description}/>
                    <Skill style={react} title={'REACT'} description={description}/>
                    <Skill style={redux} title={'REDUX'} description={description}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;