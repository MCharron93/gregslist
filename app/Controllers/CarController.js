import { ProxyState } from "../AppState.js"
import {carService} from "../Services/CarService.js"

function _draw() {
  let cars = ProxyState.cars
  let temp = carService
  // console.log("")
}

export default class CarController {
  constructor() {
    console.log("Cars Controller")
    _draw()
  }
}