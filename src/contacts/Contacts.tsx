import React from 'react';
import styles from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={styles.form}>
                    <input className={styles.input}/>
                    <input className={styles.input}/>
                    <textarea className={styles.textarea}/>
                </form>
                <button className={styles.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts