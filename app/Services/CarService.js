import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from "../Services/AxiosService.js"

class CarService {
  constructor() {
    this.getCars()
    // console.log(ProxyState.cars) NOTE used to check if connected
  }
  getCars() {
    api.get("cars").then(res => {
      // console.log(res.data.data)NOTE  used to make sure cars are being requested and uploaded
      ProxyState.cars = res.data.data.map(rawData => new Car(rawData))
    }).catch(err => console.error(err))
  }

  bid(id, bid) {
    let temp = ProxyState.cars

    if (bid > 0) {
      let car = temp.find(c => c._id == id)
      car.price += parseInt(bid)
      ProxyState.cars = temp
    }
  }

  removeCar(id) {
    // console.log("remove car") NOTE -- used to see if button connected
    // let temp = ProxyState.cars
    // let carIndex = temp.findIndex(c => c._id == id)
    // temp.splice(carIndex, 1)
    // ProxyState.cars = temp

    api.delete("cars/" + id).then(res => {
      // console.log(res.data)
      this.getCars()
    })
  }


  createCar(rawCar) {
    // let newCar = new Car(rawCar)
    // console.log(newCar)
    // console.log(ProxyState)
    // let cars = [...ProxyState.cars, newCar]
    // ProxyState.cars = cars NOTE originally used to create a new car to the Proxy State

    api.post("cars", rawCar).then(res => {
      // console.log(res.data) NOTE used to ensure car is added to api
      this.getCars()
    }).catch(err => console.error(err))
  }

}

export const carService = new CarService()