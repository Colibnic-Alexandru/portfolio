import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './../Common/Styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    <div><input className={style.input} type={'text'}/></div>
                    <div><input className={style.input} type={'text'}/></div>
                    <div><textarea className={style.textarea}/></div>
                </div>
                <div>
                    <a href="" className={style.button}>Отправить</a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;