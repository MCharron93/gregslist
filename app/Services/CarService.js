import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"

class CarService {
  constructor() {
    // console.log("Car Service")NOTE -- used to check if connected
  }

  bid(id, bid) {
    let temp = ProxyState.cars

    if (bid > 0) {
      let car = temp.find(c => c.id == id)
      car.price += parseInt(bid)
      ProxyState.cars = temp
    }
  }

  removeCar(id) {
    // console.log("remove car") NOTE -- used to see if button connected
    let temp = ProxyState.cars
    let carIndex = temp.findIndex(c => c.id == id)
    temp.splice(carIndex, 1)
    ProxyState.cars = temp
  }


  createCar(rawCar) {
    let newCar = new Car(rawCar)
    // console.log(newCar)
    // console.log(ProxyState)
    let cars = [...ProxyState.cars, newCar]
    ProxyState.cars = cars
  }

} 

export const carService = new CarService()