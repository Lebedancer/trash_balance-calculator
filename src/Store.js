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

    @computed get cash() {
        return this.real.cash - this.collective.cash -  this.own.cash;
    };

    @computed get totalOwn() {
        return {
            nonCash: this.real.alpha - this.own.nonCash,
            other: this.own.other
        };
    }

    @computed get totalCollective() {
        return {
            nonCash: this._getCollectiveNonCash()
        };
    }

    updateOwn(field, value) {
        this.own[field] = value;
    }

    updateCollective(field, value) {
        this.collective[field] = value;
    }

    updateReal(field, value) {
        this.real[field] = value;
    }

    _getCollectiveNonCash() {
        const collectiveSum = this.collective.nonCash;
        const ownOtherSum = this.own.other;
        const realTinkoff = this.real.tinkoff;

        return realTinkoff - ownOtherSum - collectiveSum;
    }
}

export default Store