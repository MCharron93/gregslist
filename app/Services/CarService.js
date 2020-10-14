import { ProxyState } from "../AppState.js"
import Car from "../Models/Cars.js"

class CarService {
  constructor() {
    console.log("Car Service")
  }

  createCar(rawCar) {
    let newCar = new Car(rawCar)
    console.log(newCar)
    let cars = [...ProxyState, newCar]
    ProxyState.cars = cars
  }

}

export const carService = new CarService()