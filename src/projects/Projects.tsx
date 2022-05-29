import React from 'react';
import styleContainer from '../common/styles/Container.module.scss';
import style from './Projects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import socialImage from './../assets/image/social-network.jpg';
import todoImage from './../assets/image/todo-list.png';
import counterImage from './../assets/image/Counter.png';

const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    const counter = {
        backgroundImage: `url(${counterImage})`,
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Project'}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social Network'}
                             description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>
                    <Project style={todolist} title={'Todo List'} description={'standard dummy text ever since the 1500s,' +
                        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
                    <Project style={counter} title={'Counter'} description={'standard dummy text ever since the 1500s,' +
                        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;