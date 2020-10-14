import { generateId } from "../Utils/GenerateId.js"

export default class Car {
  constructor({ make, model, year, price }) {
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.id = generateId()
  }


}

// get Template(){

// }