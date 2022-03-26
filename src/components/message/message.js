import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './message.module.scss';
import Title from '../title/title';

const Message = ({ variant, children }) => {
    if ((variant === 'success') || (variant === 'deleted')) return (
        <div className={classNames(styles.root, styles[variant])}>
            <Title tagElement={'h3'} variant={'title'} color={'white'}>
                {children}
            </Title>
        </div>
    );

    return null;
};

Message.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Message.defaultProps = {
    variant: 'success',
    children: 'Data Berhasil Disimpan',
};

export default Message;
