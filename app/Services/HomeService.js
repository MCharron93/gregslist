import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"

class HomeService {
  constructor() {
    console.log("Home Service")
  }
}

export const homeService = new HomeService()