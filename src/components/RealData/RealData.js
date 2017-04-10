import React, { Component } from 'react';
import LabeledInput from '../LabeledInput';
import style from './style.less';

class Section extends Component {
  render() {
      return (
        <div className={style.labeledInput}>
            <LabeledInput title="Альфа"/>
            <LabeledInput title="Тинкофф"/>
            <LabeledInput title="Альфа-нал"/>
            <LabeledInput title="Тинкофф-нал"/>
        </div>
    );
  }
}

export default Section;
