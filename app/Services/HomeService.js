import { ProxyState } from "../AppState.js"
import House from "../Models/Home.js"
import { api } from "./AxiosService.js"

class HomeService {
  constructor() {
    // console.log("Home Service") NOTE used to see if home service connected
    this.getHouses()
  }

  getHouses() {
    api.get("houses").then(res => {
      console.log(res.data)
      // ; NOTE used to make sure data is being pulled
      ProxyState.houses = res.data.data.map(house => new House(house))
    }).catch(err => console.error(err))
  }

  createHouse(newHouse) {
    api.post("houses", newHouse).then(res => {
      this.getHouses()
    }).catch(err => console.error(err))
  }


  removeHome(id) {
    // console.log("Remove home") NOTE -- used to see if button connected
    // let temp = ProxyState.houses
    // let homeIndex = temp.findIndex(h => h._id == id)
    // temp.splice(homeIndex, 1)
    // ProxyState.houses = temp
    api.delete("houses/" + id).then(res => {
      this.getHouses()
    }).catch(err => console.error(err))
  }

  bid(id, bid) {
    // console.log("you bid!") NOTE -- used to connect bid function between controller and service.
    let temp = ProxyState.houses
    if (bid > 0) {
      let home = temp.find(h => h._id == id)
      home.price += parseInt(bid)
      ProxyState.houses = temp
    }
  }
}

export const homeService = new HomeService()