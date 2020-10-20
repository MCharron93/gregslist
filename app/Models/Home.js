import { generateId } from "../Utils/GenerateId.js"

export default class House {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.rooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this._id = data._id || generateId()
  }

  get Template() {
    return /*html*/`
  <div class="col-4">
    <div class="card">
      <img src="${this.imgUrl}"class="card-img-top img-fluid">
      <div class="card-body">
            <h3 class="card-title">Rooms: ${this.rooms} Baths: ${this.bathrooms}</h3>
            <p class="card-text">Levels: ${this.levels}</p>
            <p class="card-text">Price: $${this.price}</p>
            <p class="card-text">year: ${this.year}</p>
            <p>${this.description}</p>
            <form onsubmit="app.homeController.bid('${this._id}')">
            <div className="form-group">
            <input type="number" class="form-control" name="bid" id="bid"  placeholder="Bid">
            </div>
            <button class="btn btn-success btn-block p-1" type="submit">Bid</button>
            <button type="button" class="btn btn-primary btn-block p-1" data-toggle="modal" data-target="#editHouseModal-${this._id}">Edit</button>
            <button class="btn btn-danger btn-block p-1" onclick="app.homeController.removeHome('${this._id}')">Delete</button></form>
      </div>
    </div>
  </div>
  ${this.Modal}`
  }

  get Modal() {
    return /*html*/`
    <div class="modal fade" id="editHouseModal-${this._id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit This Listing?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form onsubmit="app.houseController.editHouse(event, '${this._id}')" class="form-inline">
                        <div class="col p-1">
                            <input type="text" name="rooms" id="rooms" value="${this.rooms}" class="form-control" placeholder="Rooms">
                        </div>
                        <div class="col p-1">
                            <input type="text" name="bathrooms" id="bathrooms" value="${this.bathrooms}" class="form-control" placeholder="Bathrooms">
                        </div>
                        <div class="col p-1">
                            <input type="number" name="price" id="price" value="${this.price}" class="form-control" placeholder="Price">
                        </div>
                        <div class="col p-1">
                            <input type="number" name="year" id="year" value="${this.year}" class="form-control" placeholder="Year">
                        </div>
                        <div class="col p-1">
                            <input type="text" name="imgUrl" id="imgUrl" value="${this.imgUrl}" class="form-control" placeholder="ImageURL">
                        </div>
                        <div class="col p-1">
                            <input type="text" name="levels" id="levels" value="${this.levels}" class="form-control"
                                placeholder="Levels">
                        </div>
                        <div class="col p-1">
                            <input type="text" name="description" id="description" value="${this.description}" class="form-control"
                                placeholder="Description">
                        </div>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
    `
  }
}