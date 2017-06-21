import React, { Component } from 'react';
import LabeledInput from '../../common/LabeledInput';
import style from './style.less';
import { observer } from 'mobx-react'

class Section extends Component {
    constructor({ store }) {
        super();

        this.store = store;
    }

    _onChangeVal = ({ val, type }) => {
        this.store.updateOwn(type, val);
    }

    render() {
        const { cash, nonCash, other }  = this.store.own;

        return (
            <div>
                <LabeledInput title="Безнал" type='nonCash' value={nonCash} onChange={this._onChangeVal}/>
                <LabeledInput title="Наличные"  type='cash' value={cash} onChange={this._onChangeVal}/>
                <LabeledInput title="Другая карта" type='other' value={other} onChange={this._onChangeVal}/>
            </div>
        );
    }
}

export default observer(Section);
