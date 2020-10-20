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
    // console.log(ProxyState.cars)NOTE -- used to see if cars was populating in console
    _draw()
    ProxyState.on("cars", _draw)
  }


  bid(id) {
    event.preventDefault()
    let form = event.target
    // console.log(form.bid.value) NOTE -- used to make sure bid is being passed in from form
    // @ts-ignore
    let bid = form.bid.value
    carService.bid(id, bid)
  }

  removeCar(id) {
    carService.removeCar(id)
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
      price: form.price.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
      // @ts-ignore
      description: form.description.value
    }
    // console.log(rawCar)
    carService.createCar(rawCar)
    // @ts-ignore
    form.reset()
  }
} 