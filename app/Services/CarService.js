import {ProxyState} from "../AppState.js"
import Car from "../Models/Cars.js"

class CarService {
  constructor(){
    console.log("Car Service")
  }
}

export const carService = new CarService()