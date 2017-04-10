import { observable, computed, action } from "mobx";

class Store {
    @observable own = {
        cash: 0,
        nonCash: 0,
        other: 0,

        setField: action(function(field, val) {
            this[field] = val;
        })
    };
    @observable collective = {
        cash: 0,
        nonCash: 0
    };

    // @observable totalOwn = {
    //     cash: this.own.cash,
    //     nonCash: this.own.nonCash,
    //     other: this.own.other
    // };

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

    updateOwn(...params) {
        this.own.setField(...params);
    }
}

export default Store