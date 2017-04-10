import React, { Component } from 'react';
import Section from '../components/Section';
import LabeledInput from '../components/LabeledInput';
import style from './style.less';

class App extends Component {
  render() {
    return (
        <div>
            <Section>
                <LabeledInput title="Безнал"/>
                <LabeledInput title="Наличные"/>
                <LabeledInput title="Другая карта"/>
            </Section>
            <Section>
                не моя
            </Section>
            <Section className={style.ownSection}>
                реально
            </Section>
            <section className={style.ownSection}>
                Итого
            </section>
        </div>
    );
  }
}

export default App;
