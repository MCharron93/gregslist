// import Value from "./Models/Value.js"
import Car from "./Models/Car.js"
import House from "./Models/Home.js"
// import Cars from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {Value[]} */
  // values = []

  /**@type {Car[]} */
  cars = []

  /**@type {House[]} */
  houses = []
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
