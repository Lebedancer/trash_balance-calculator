import {observable, computed} from "mobx";

class Store {
    @observable own = {
        cash: 0,
        nonCash: 0,
        other: 0,
    };
    @observable collective = {
        cash: '',
        nonCash: ''
    };

    @computed get totalOwn() {
        return 1;
    }

    @computed get totalCollective() {
        return this.price * this.amount;
    }
}

export default Store