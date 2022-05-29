import React from 'react';
import styleContainer from "../common/styles/Container.module.scss";
import style from './Hire.module.scss'

const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I Am Available For Freelancer</h2>
                <a href="" className={style.button}>HIRE ME</a>
            </div>
        </div>
    );
};

export default Hire;