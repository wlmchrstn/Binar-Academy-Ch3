import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './navbar.module.scss';

// Components
import Paragraph from '../../components/paragraph/paragraph';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Title from '../../components/title/title';

// Assets
import menu from '../../assets/icons/fi_menu.svg';
import chevronDown from '../../assets/icons/fi_chevron-down.svg';


const NavBar = ({ ...props }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className={styles.root} {...props}>
            <div className={styles.menu}>
                <img src={menu} alt={'logo-menu'} />
            </div>
            <div className={styles.user}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.search}>
                    <Input>
                        <input
                            type={'text'}
                            placeholder={'Search'}
                            {...register('search')} />
                    </Input>
                    <Button type={'submit'} variant={'primary-outlined'}>
                        {'Search'}
                    </Button>
                </form>
                <div className={styles.profile}>
                    <div className={styles['profile-image']}>
                        <Title tagElement={'h3'} variant={'title'} color={'black'}>
                            {'U'}
                        </Title>
                    </div>
                    <Paragraph variant={'body-1'} color={'black'}>
                        {'Unis Badri'}
                    </Paragraph>
                    <div className={styles.chevron}>
                        <img src={chevronDown} alt={'logo-chevron-down'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
