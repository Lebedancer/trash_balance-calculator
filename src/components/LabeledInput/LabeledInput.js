import React, { Component } from 'react';
import style from './style.less';

class Section extends Component {
  render() {
    return (
        <div className={style.section}>
            {this.props.children}
        </div>
    );
  }
}

export default Section;
