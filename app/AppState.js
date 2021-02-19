import Blah from "./Models/Blah.js"
import FoodItem from "./Models/FoodItem.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /** @type {FoodItem[]} */
  foodItems = [new FoodItem({name: "zapps", price: 2.00, quantity: 10}), new FoodItem({name: "doritos", price: 10.00, quantity: 2}), new FoodItem({name: "cheetos", price: 3.00, quantity: 50})]

  money = 0
  /** @type {Blah[]} */

  blah = [new Blah(({name: "zapps", price: 2.00, quantity: 10}))]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
