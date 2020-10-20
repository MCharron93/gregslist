import { generateId } from "../Utils/GenerateId.js"

export default class House {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.rooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.price = data.price
    this.description = data.description
    this._id = data._id || generateId()
  }

  get Template() {
    return /*html*/`<div class="col-4">
    <div class="card">
        <img src="${this.imgUrl}"class="card-img-top img-fluid">
        <div class="card-body">
            <h3 class="card-title">Rooms: ${this.rooms} Baths: ${this.bathrooms}</h3>
            <p class="card-text">Levels: ${this.levels}</p>
            <p class="card-text">Price: $${this.price}</p>
            <p>${this.description}</p>
            <form onsubmit="app.homeController.bid('${this._id}')">
            <div className="form-group">
            <input type="number" class="form-control" name="bid" id="bid"  placeholder="Bid">
            </div>
            <button class="btn btn-success btn-block" type="submit">Bid</button></form>
            <button class="btn btn-danger btn-block" onclick="app.homeController.removeHome('${this._id}')">Delete</button>
        </div>
    </div>
</div>`
  }
}