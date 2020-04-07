import React, { Component } from 'react';
import Section from '../components/common/Section';
import RealData from '../components/RealData';
import ReturnData from '../components/ReturnData';
import CollectiveBalance from '../components/balance/CollectiveBalance';
// import CollectiveResult from '../components/result/CollectiveResult';
import OwnBalance from '../components/balance/OwnBalance';
// import OwnResult from '../components/result/OwnResult';
import style from './style.less';

import Store from '../Store'

class App extends Component {
    constructor() {
        super();
        this.store = new Store();
    }

    render() {
        return (
            <div className={style.app}>
                <Section isBlock={true}  title="Есть сейчас">
                    <RealData store={this.store}/>
                </Section>
                <section className={style['app__line']}>
                    <Section title="Личное">
                        <OwnBalance store={this.store}/>
                    </Section>
                    <Section title="Общественное">
                        <CollectiveBalance store={this.store}/>
                    </Section>
                </section>
                <Section isBlock={true} isOpposite={true} title="Вернуть">
                    <ReturnData store={this.store}/>
                </Section>
            </div>
        );
    }
}

export default App;
