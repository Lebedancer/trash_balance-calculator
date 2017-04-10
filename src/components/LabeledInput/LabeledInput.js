import React, { Component } from 'react';
import style from './style.less';
import classnames from 'classnames';

class Section extends Component {
    getTypeClass() {
        const { isOpposite } = this.props;
        const oppositeClassName = isOpposite && style['labeledInput--opposite'];

        return classnames(oppositeClassName);
    }

    _getRow() {
        const { readonly, value } = this.props;

        if (readonly) {
            return <span>{value}</span>
        } else {
            return <input className={style.labeledInput__input} type="text" value={value}/>
        }
    }

    render() {
        const props = this.props;
        const className = classnames(style.labeledInput, this.getTypeClass());
        return (
            <div className={className}>
                <label className={style.labeledInput__title}>{props.title}</label>
                { this._getRow() }
            </div>
        );
    }
}

export default Section;
