import React, { Component } from 'react';
import LabeledInput from '../../common/LabeledInput';
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
            </div>
        );
    }
}

export default observer(Section);
