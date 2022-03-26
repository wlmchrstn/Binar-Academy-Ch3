import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './title.module.scss';

const Title = ({ children, tagElement, variant, color, ...props }) => {

    const baseProps = {
        className: classNames(
            styles.root,
            styles[variant],
            styles[color],
            props.className
        ),
    };

    return (
        <>
            {
                {
                    h1: <h1 {...baseProps}>{children}</h1>,
                    h2: <h2 {...baseProps}>{children}</h2>,
                    h3: <h3 {...baseProps}>{children}</h3>,
                    h4: <h4 {...baseProps}>{children}</h4>,
                    h5: <h5 {...baseProps}>{children}</h5>,
                    h6: <h6 {...baseProps}>{children}</h6>,
                }[tagElement]
            }
        </>
    );
};


Title.propTypes = {
    children: PropTypes.node.isRequired,
    tagElement: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
};

Title.defaultProps = {
    children: '',
    tagElement: 'h1',
    variant: 'heading-1',
    color: 'black',
};

export default Title;
