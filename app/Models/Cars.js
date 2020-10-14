import { generateId } from "../Utils/GenerateId.js"

export default class Car {
  constructor({ make, model, year, price }) {
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.id = generateId()
  }


  get Template() {
    return /*html*/`<div class="col-4">
    <div class="card">
        <img src="https://via.placeholder.com/350x150" alt="" class="card-img-top img-fluid">
        <div class="card-body">
            <h3 class="card-title">${this.make.toUpperCase()}` + `, ` + /*html*/`${this.model.toUpperCase()}</h3>
            <p class="card-text">Price: $${this.price}</p>
            <p class="card-text">Year: ${this.year}</p>
            <button class="btn btn-success" onclick="app.carController.bid('${this.id}')">Bid</button>
            <button class="btn btn-danger" onclick="app.carController.removeCar('${this.id}')">Delete</button>
        </div>
    </div>
</div>`
  }

}