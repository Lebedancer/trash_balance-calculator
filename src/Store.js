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
        alphaCash: 0,
        tinkoffCash: 0,
    };

    // @observable totalOwn = {
    //     cash: this.own.cash,
    //     nonCash: this.own.nonCash,
    //     other: this.own.other
    // };

    @computed get totalOwn() {
        return {
            nonCash: this.real.alpha - this.own.nonCash,
            cash: this.real.alphaCash - this.own.cash,
            other: this.own.other
        };
    }

    @computed get totalCollective() {
        return {
            cash: 1,
            nonCash: 2
        };
    }

    updateOwn(field, value) {
        this.own[field] = value;
    }

    updateReal(field, value) {
        this.real[field] = value;
    }
}

export default Store