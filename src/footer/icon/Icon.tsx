import React from 'react';
import style from './Icon.module.scss';

type PropsType = {
    style: {}
    title: string
}

const Icon = (props:PropsType) => {
    return (
        <div className={style.icon} style={props.style}>
            {props.title}
        </div>
    );
};

export default Icon;