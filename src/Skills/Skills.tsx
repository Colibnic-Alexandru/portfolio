import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../Common/Styles/Container.module.css';
import Skill from "./Skill/Skill";

const Skills = () => {

    const description = 'Lorem Ipsum is simply dummy text of the printing and ' +
        'typesetting industry. Lorem Ipsum has been the industry ' +
        's standard dummy text ever since the 1500s'

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={description}/>
                    <Skill title={'CSS'} description={description}/>
                    <Skill title={'REACT'} description={description}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;