import React, { Component } from 'react';
import style from './style.less';
import classnames from 'classnames';

class Section extends Component {
    constructor() {
        super();
    }

    getTypeClass() {
        const { isBlock, isOpposite } = this.props;
        const blockClass = isBlock && style['section--block'];
        const oppositeClassName = isOpposite &&  style['section--opposite'];

        return classnames(blockClass, oppositeClassName);
    }

    render() {
        const { title } = this.props;
        const className = classnames(style.section, this.getTypeClass());

        return (
            <div className={className}>
                <div className={style.section__title}>{title}</div>
                {this.props.children}
            </div>
        );
    }
}

export default Section;
