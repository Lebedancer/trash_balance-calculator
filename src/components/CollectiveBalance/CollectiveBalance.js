import React, { Component } from 'react';
import LabeledInput from '../LabeledInput';
import style from './style.less';

class Section extends Component {
  render() {
      return (
        <div>
            <LabeledInput title="Безнал"/>
            <LabeledInput title="Наличные"/>
        </div>
    );
  }
}

export default Section;
