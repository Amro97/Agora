import { observable, action, makeObservable } from 'mobx'

export class Inventory {
    constructor() {
        this.items = []
        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice: action
        })
    }
    addItem(itemName, price = 0, quantity = 1) {
        let temp = this.items.findIndex(e => e.name === itemName)
        if (temp === -1)
            this.items.push({ name: itemName, price, quantity })
        else
            this.items[temp].quantity++
    }
    buyItem(itemName) {
        let temp = this.items.findIndex(e => e.name === itemName)
        if (temp === -1)
            return "err not found"
        this.items[temp].quantity--
        if (!this.items[temp].quantity)
            this.items.splice(temp, 1)
    }
    changePrice(itemName, newPrice) {
        let temp = this.items.findIndex(e => e.name === itemName)
        if (temp === -1)
            return "err not found"
        this.items[temp].price = newPrice
    }
}