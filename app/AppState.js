// import Value from "./Models/Value.js"
import Car from "./Models/Car.js"
import Home from "./Models/Home.js"
// import Cars from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {Value[]} */
  // values = []

  /**@type {Car[]} */
  cars = [new Car({ make: "honda", model: "civic", year: 2000, price: 3000 })]

  /**@type {Home[]} */
  homes = [new Home({ address: "22 W. Philli Ct.", rooms: 2, bathrooms: 2.5, floor: "wood", yard: true, price: 200000 })]
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
