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
        const { cash, tinkoff }= this.store.return;

        return (
            <div className={style.labeledInput}>
                <LabeledInput isOpposite={true} readonly={true} type="cash" title="Наличные" value={cash}  onChange={this._onChange}/>
                <LabeledInput isOpposite={true} readonly={true} type="tinkoff" title="Тинкофф" value={tinkoff}  onChange={this._onChange}/>
            </div>
        );
    }
}

export default observer(Section);
