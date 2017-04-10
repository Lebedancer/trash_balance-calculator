import { observable, computed } from "mobx";

class Store {
    @observable own = {
        cash: 0,
        nonCash: 0,
        other: 0,
    };
    @observable collective = {
        cash: 0,
        nonCash: 0
    };

    @computed get totalOwn() {
        return {
            cash: this.own.cash,
            nonCash: this.own.nonCash,
            other: this.own.other
        };
    }

    @computed get totalCollective() {
        return {
            cash: 1,
            nonCash: 2
        };
    }
}

export default Store