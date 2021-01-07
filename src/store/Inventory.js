import { observable, action, makeObservable, computed } from 'mobx'
import { Item } from './Item'

export class Inventory {
    constructor() {
        this.items = []
        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice: action,
            numItems: computed,
        })
    }
    addItem(itemName) {
        let temp = this.items.findIndex(e => e.name === itemName)
        if (temp === -1){
            const newItem = new Item(itemName)
            this.items.push(newItem)
        }
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
    get numItems(){
        let count = 0
        this.items.forEach(i => count += i.quantity)
        return count
    }
}