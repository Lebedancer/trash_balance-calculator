import { observable, computed, action } from "mobx";

class Store {
    @observable own = {
        nonCash: 0,
        cash: 0,
        other: 0,
    };

    @observable collective = {
        nonCash: 0,
        cash: 0
    };

    @observable real = {
        alpha: 0,
        tinkoff: 0,
        cash: 0,
    };

    @computed get return() {
        return {
            cash: this.real.cash - Math.abs(this.collective.cash - this.own.cash),
            tinkoff: this.real.tinkoff - Math.abs(this.collective.nonCash - this.own.other),
            alpha: this.real.alpha - Math.abs(this.own.nonCash)
        }
    };

    updateOwn(field, value) {
        this.own[field] = value;
    }

    updateCollective(field, value) {
        this.collective[field] = value;
    }

    updateReal(field, value) {
        this.real[field] = value;
    }
}

export default Store