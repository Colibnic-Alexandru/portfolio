import React from "react";
import style from './MyWork.module.css'

type PropsType = {
    title:string
    description: string
}

const MyWork = (props:PropsType) => {
    return (
        <div className={style.work}>
            <div className={style.icon}></div>
            <a href="" className={style.button}>{props.title}</a>
            <span className={style.projectName}>Название Проекта</span>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    );
};

export default MyWork;