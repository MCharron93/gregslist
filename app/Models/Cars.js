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
        <img src="" alt="" class="card-img-top img-fluid">
        <div class="card-body">
            <h3 class="card-title"></h3>
            <p class="card-text"></p>
            <button class="btn btn-success">Submit</button>
        </div>
    </div>
</div>`
  }

}