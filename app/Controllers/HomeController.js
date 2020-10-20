import { ProxyState } from "../AppState.js"
import { homeService } from "../Services/HomeService.js"


function _draw() {
  let houses = ProxyState.houses
  let template = ""
  houses.forEach(h => template += h.Template)
  document.getElementById("houses").innerHTML = template
}

export default class HomeController {
  constructor() {
    // console.log("Home Controller") NOTE used to connect home controller
    ProxyState.on("houses", _draw)
    _draw()
  }

  // createHome(id) {

  // }

  removeHome(id) {
    homeService.removeHome(id)
  }

  bid(id) {
    // event.preventDefault();
    // let form = event.target
    // let bid = form.bid.value
    // homeService.bid(id, bid)
  }
}

