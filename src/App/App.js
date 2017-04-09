import React, { Component } from 'react';
import Section from '../components/Section';
import style from './style.less';

class App extends Component {
  render() {
    return (
        <div>
            <Section>
                <input type="text"/>
            </Section>
            <section className={style.ownSection}>
                не моя
            </section>
            <section className={style.ownSection}>
                реально
            </section>
            <section className={style.ownSection}>
                Итого
            </section>
        </div>
    );
  }
}

export default App;
