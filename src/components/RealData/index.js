import React, { Component } from 'react';
import LabeledInput from '../common/LabeledInput';
import style from './style.less';
import { observer } from 'mobx-react'

class Section extends Component {
    constructor({ store }) {
        super();
        this.store = store;
    }

    _onChange = ({ val, type}) => {
        this.store.updateReal(type, val);
    }

    render() {
        const { alpha, tinkoff, cash }  = this.store.real;

        return <div className={style.labeledInput}>
                <LabeledInput type="alpha" title="Альфа" value={alpha} onChange={this._onChange}/>
                <LabeledInput type="tinkoff" title="Тинкофф" value={tinkoff}  onChange={this._onChange}/>
                <LabeledInput type="cash" title="Наличные" value={cash}  onChange={this._onChange}/>
            </div>;
    }
}

export default observer(Section);
