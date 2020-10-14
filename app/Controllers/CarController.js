import { ProxyState } from "../AppState.js"
import { carService } from "../Services/CarService.js"

function _draw() {
  let cars = ProxyState.cars
  let template = ""
  cars.forEach(c => template += c.Template)
  document.getElementById("cars").innerHTML = template
}

export default class CarController {
  constructor() {
    console.log(ProxyState.cars)
    _draw()
  }

  createCar() {
    // console.log("creating car")--NOTE used to ensure hookups correct between form and controller
    event.preventDefault();

    // console.log(form) NOTE -- ensure car form in reading inputs from form 
    let form = event.target
    let rawCar = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value
    }
    console.log(rawCar)
    carService.createCar(rawCar)
  }
}