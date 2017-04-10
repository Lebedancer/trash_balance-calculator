import React, { Component } from 'react';
import style from './style.less';

class Section extends Component {
  render() {
      const props = this.props;

      return (
        <div className={style.labeledInput}>
            <label className={style.labeledInput__title}>{props.title}</label>
            <input className={style.labeledInput__input} type="text"/>
        </div>
    );
  }
}

export default Section;
