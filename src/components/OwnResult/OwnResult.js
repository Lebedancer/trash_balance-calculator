import React, { Component } from 'react';
import LabeledInput from '../LabeledInput';
import style from './style.less';
import { observer } from 'mobx-react'
import Store from '../../Store';

class Section extends Component {
    constructor() {
        super();

        this.store = new Store();
    }

    render() {
        const { cash, nonCash, other }  = this.store.own;

        return (
            <div>
                <LabeledInput isOpposite={true} readonly={true} title="Безнал" value={nonCash}/>
                <LabeledInput isOpposite={true} readonly={true} title="Наличные" value={cash}/>
                <LabeledInput isOpposite={true} readonly={true} title="Другая карта" value={other}/>
            </div>
        );
    }
}

export default observer(Section);
