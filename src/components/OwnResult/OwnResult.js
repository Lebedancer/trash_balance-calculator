import React, { Component } from 'react';
import LabeledInput from '../LabeledInput';
import style from './style.less';
import {observer} from 'mobx-react'

class Section extends Component {
  render() {
      return (
        <div>
            <LabeledInput isOpposite={true} readonly={true} title="Безнал"/>
            <LabeledInput isOpposite={true} readonly={true} title="Наличные"/>
            <LabeledInput isOpposite={true} readonly={true} title="Другая карта"/>
        </div>
    );
  }
}

export default observer(Section);
