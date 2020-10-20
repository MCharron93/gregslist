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

  createHouse() {
    event.preventDefault();
    let form = event.target
    let newHouse = {
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      yard: form.yard.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
      // @ts-ignore
      description: form.description.value

    }

    homeService.createHouse()
  }

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

