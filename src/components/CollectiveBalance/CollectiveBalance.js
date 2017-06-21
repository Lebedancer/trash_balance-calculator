import React, { Component } from 'react';
import LabeledInput from '../LabeledInput';
import style from './style.less';

class Section extends Component {
    constructor({ store }) {
        super();

        this.store = store;
    }
    _onChangeVal = ({ val, type }) => {
        this.store.updateCollective(type, val);
    }

    render() {
      return (
        <div>
            <LabeledInput title="Безнал" type='nonCash' onChange={this._onChangeVal}/>
            <LabeledInput title="Наличные" type='cash' onChange={this._onChangeVal}/>
        </div>
    );
  }
}

export default Section;
