import React, { Component } from 'react';
import Section from '../components/Section';
import RealData from '../components/RealData';
import CollectiveBalance from '../components/CollectiveBalance';
import CollectiveResult from '../components/CollectiveResult';
import OwnBalance from '../components/OwnBalance';
import OwnResult from '../components/OwnResult';
import style from './style.less';
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import Store from '../Store'

class App extends Component {
    constructor() {
        super();
        this.store = new Store();
    }

    render() {
        return (
            <div className={style.app}>
                <DevTools />
                <section className={style['app__line']}>
                    <Section title="Личное">
                        <OwnBalance store={this.store}/>
                    </Section>
                    <Section title="Общественное">
                        <CollectiveBalance/>
                    </Section>
                </section>
                <Section isBlock={true}>
                    <RealData/>
                </Section>
                <section className={style['app__line']}>
                    <Section isOpposite={true} title="Вернуть личное">
                        <OwnResult store={this.store}/>
                    </Section>
                    <Section isOpposite={true} title="Вернуть общественное">
                        <CollectiveResult />
                    </Section>
                </section>
            </div>
        );
    }
}

export default App;
