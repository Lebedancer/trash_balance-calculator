import React, { Component } from 'react';
import style from './style.less';

class Section extends Component {
  render() {
    return (
        <div className={style.section}>
            <div className={style.section__title}></div>
            {this.props.children}
        </div>
    );
  }
}

export default Section;
