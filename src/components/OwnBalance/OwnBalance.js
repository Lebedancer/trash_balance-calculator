import React, { Component } from 'react';
import LabeledInput from '../LabeledInput';
import style from './style.less';
import { observer } from 'mobx-react'

class Section extends Component {
    constructor({ store }) {
        super();

        this.store = store;
    }

    _onChangeNonCash = (e) => {
        const val = parseFloat(e.target.value) || 0;
        this.store.updateOwn('nonCash', val);
    }

    render() {
        const { cash, nonCash, other }  = this.store.own;

        return (
            <div>
                <LabeledInput title="Безнал" value={nonCash} onChange={this._onChangeNonCash}/>
                <LabeledInput title="Наличные" value={cash}/>
                <LabeledInput title="Другая карта" value={other}/>
            </div>
        );
    }
}

export default observer(Section);
