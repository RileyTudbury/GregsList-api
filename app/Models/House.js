export default class House {
  constructor(data) {
    this._id = data._id;
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description

  }

  get Template() {

    return `
              <div class="col-12 col-md-3">
              <div class="card my-3">
              <img class="card-img-top" src="${
      this.imgUrl
      }" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Beds: ${this.bedrooms} - Baths:  ${this.bathrooms} - ${
      this.year
      }</h5>
                <p class="card-text">${this.description} <b>$${
      this.price
      }</b>
              </div>
            </div>
              </div>
      `;
  }
}
