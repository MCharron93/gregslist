import { generateId } from "../Utils/GenerateId.js"

export default class Home {
  constructor({ address, rooms, bathrooms, floor, yard, price }) {
    this.address = address
    this.rooms = rooms
    this.bathrooms = bathrooms
    this.floor = floor
    this.yard = yard
    this.price = price
    this.id = generateId()
  }

  get Template() {
    return /*html*/`<div class="col-4">
    <div class="card">
        <img src="https://via.placeholder.com/400x250" alt="" class="card-img-top img-fluid">
        <div class="card-body">
            <h3 class="card-title">${this.address.toUpperCase()}` + `, ` + /*html*/`Rooms: ${this.rooms}</h3>
            <p class="card-text">Baths: ${this.bathrooms}</p>
            <p class="card-text">Price: $${this.price}</p>
            <form onsubmit="app.carController.bid('${this.id}')">
            <div className="form-group">
            <input type="number" class="form-control" name="bid" id="bid" aria-describedby="helpId" placeholder="Bid">
            </div>
            <button class="btn btn-success" type="submit">Bid</button></form>
            <button class="btn btn-danger" onclick="app.carController.removeCar('${this.id}')">Delete</button>
        </div>
    </div>
</div>`
  }
}