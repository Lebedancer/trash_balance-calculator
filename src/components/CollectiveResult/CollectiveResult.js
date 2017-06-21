import React, { Component } from 'react';
import LabeledInput from '../LabeledInput';
import style from './style.less';
import {observer} from 'mobx-react'

class Section extends Component {
    constructor({ store }) {
        super();
        this.store = store;
    }

    render() {
        const { cash, nonCash } = this.store.totalCollective;

        return (
            <div>
                <LabeledInput isOpposite={true} readonly={true} title="Безнал" value={nonCash}/>
                <LabeledInput isOpposite={true} readonly={true} title="Наличные" value={cash}/>
            </div>
        );
    }
}

export default observer(Section);
