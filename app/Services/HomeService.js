import { ProxyState } from "../AppState.js"
import Home from "../Models/Home.js"

class HomeService {
  constructor() {
    // console.log("Home Service") NOTE used to see if home service connected
  }

  // createHome(id) {
  //   console.log("created home")
  // }

  removeHome(id) {
    // console.log("Remove home") NOTE -- used to see if button connected
    let temp = ProxyState.homes
    let homeIndex = temp.findIndex(h => h.id == id)
    temp.splice(homeIndex, 1)
    ProxyState.homes = temp
  }

  bid(id, bid) {
    // console.log("you bid!") NOTE -- used to connect bid function between controller and service.
    let temp = ProxyState.homes
    if (bid > 0) {
      let home = temp.find(h => h.id == id)
      home.price += parseInt(bid)
      ProxyState.homes = temp
    }
  }
}

export const homeService = new HomeService()