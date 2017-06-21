import React, { Component } from 'react';
import LabeledInput from '../LabeledInput';
import style from './style.less';
import { observer } from 'mobx-react'

class Section extends Component {
    constructor({ store }) {
        super();
        this.store = store;
    }


    _onChangeNonCash = ({ val, type}) => {
        this.store.updateReal(type, val);
    }

    render() {
        const { alpha, tinkoff, alphaCash, tinkoffCash }  = this.store.real;

        return (
            <div className={style.labeledInput}>
                <LabeledInput type="alpha" title="Альфа" value={alpha} onChange={this._onChangeNonCash}/>
                <LabeledInput title="Тинкофф" value={tinkoff}/>
                <LabeledInput title="Альфа-нал" value={alphaCash}/>
                <LabeledInput title="Тинкофф-нал" value={tinkoffCash}/>
            </div>
        );
    }
}

export default observer(Section);
