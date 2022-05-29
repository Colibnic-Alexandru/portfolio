import React from 'react';
import style from './Title.module.scss';


type PropsType = {
    text: string
}

const Title = (props: PropsType) => {
    return (
        <div className={style.title}>
            <h2 className={style.titleSize}>{props.text}</h2>
        </div>
    );
};

export default Title;