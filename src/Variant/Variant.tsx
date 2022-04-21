import React from 'react';
import styleContainer from "../Common/Styles/Container.module.css";
import style from './Variant.module.css'

const Variant = () => {
    return (
        <div className={style.variantBlock}>
            <div className={`${styleContainer.container} ${style.variantContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <div >
                    <a href="" className={style.button}>Нанять</a>
                </div>
            </div>
        </div>
    );
};

export default Variant;