import React from 'react';
import styleContainer from './../Common/Styles/Container.module.css';
import style from './MyWorks.module.css'
import MyWork from "./MyWork/MyWork";

const MyWorks = () => {

    const description = "Краткое описание"

    return (
       <div className={style.worksBlock}>
           <div className={`${styleContainer.container} ${style.worksContainer}`}>
               <h2 className={style.title}>My Works</h2>
               <div className={style.works}>
                 <MyWork title={'Смотреть'} description={description}/>
                 <MyWork title={'Смотреть'} description={description}/>
               </div>
           </div>
       </div>
    );
};

export default MyWorks;