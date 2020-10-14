import { ProxyState } from "../AppState.js"
import { homeService } from "../Services/HomeService.js"


function _draw() {
  let homes = ProxyState.homes
  let template = ""
  homes.forEach(h => template += h.Template)
  document.getElementById("homes").innerHTML = template
}

export default class HomeController {
  constructor() {
    // console.log("Home Controller") NOTE used to connect home controller
    _draw()
    ProxyState.on("homes", _draw)
  }

  // createHome(id) {

  // }

  removeHome(id) {
    homeService.removeHome(id)
  }

  bid(id) {
    event.preventDefault();
    let form = event.target
    let bid = form.bid.value
    homeService.bid(id, bid)
  }
}

