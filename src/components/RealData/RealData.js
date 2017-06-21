import React, { Component } from 'react';
import LabeledInput from '../LabeledInput';
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
        const { alpha, tinkoff, alphaCash, tinkoffCash }  = this.store.real;

        return (
            <div className={style.labeledInput}>
                <h2>Есть сейчас</h2>
                <LabeledInput type="alpha" title="Альфа" value={alpha} onChange={this._onChange}/>
                <LabeledInput type="tinkoff" title="Тинкофф" value={tinkoff}  onChange={this._onChange}/>
                <LabeledInput type="alphaCash" title="Альфа-нал" value={alphaCash}  onChange={this._onChange}/>
                <LabeledInput type="tinkoffCash" title="Тинкофф-нал" value={tinkoffCash}  onChange={this._onChange}/>
            </div>
        );
    }
}

export default observer(Section);
