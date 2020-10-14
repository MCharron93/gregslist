import { ProxyState } from "../AppState.js"
import {carService} from "../Services/CarService.js"

function _draw() {
  let cars = ProxyState.cars
  let template = ""
  cars.forEach(c => template += c.Template)
}

export default class CarController {
  constructor() {
    console.log("Cars Controller")
    _draw()
  }
}