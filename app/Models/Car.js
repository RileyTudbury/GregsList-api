export default class Car {
  constructor(data) {
    this._id = data._id;
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.description = data.description;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }

  get Template() {
    return `
              <div class="col-12 col-md-3">
              <div class="card my-3">
              <img class="card-img-top" src="${
      this.imgUrl
      }" alt="Card image cap">
              <div class="card-body text-center">
                <h5 class="card-title">${this.make} - ${this.model} - ${
      this.year
      }</h5>
                <p class="card-text">${this.description} <b>$${
      this.price
      }</b></p>
                <button class="btn btn-info" onclick="app.carsController.bid('${
      this._id
      }', ${this.price + 5})">BID $5</button>
                <button class="btn btn-danger" onclick="app.carsController.delete('${
      this._id
      }')">DELETE</button>
              </div>
            </div>
              </div>
      `;
  }
}
