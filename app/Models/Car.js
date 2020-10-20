import { generateId } from "../Utils/GenerateId.js"

export default class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.descript = data.description
    this.imgUrl = data.imgUrl
    this._id = data._id || generateId()
  }


  get Template() {
    return /*html*/`<div class="col-4">
    <div class="card">
        <img src="${this.imgUrl}"class="card-img-top img-fluid">
        <div class="card-body">
            <h3 class="card-title">${this.make.toUpperCase()}` + `, ` + /*html*/`${this.model.toUpperCase()}</h3>
            <p class="card-text">Price: $${this.price}</p>
            <p class="card-text">Year: ${this.year}</p>
            <p>${this.descript}</p>
            <form onsubmit="app.carController.bid('${this._id}')">
            <div className="form-group">
            <input type="number" class="form-control" name="bid" id="bid" aria-describedby="helpId" placeholder="Bid">
            </div>
            <button class="btn btn-success" type="submit">Bid</button></form>
            <button class="btn btn-danger" onclick="app.carController.removeCar('${this._id}')">Delete</button>
        </div>
    </div>
</div>`
  }

}