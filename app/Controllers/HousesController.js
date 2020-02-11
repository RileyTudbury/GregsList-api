import HousesService from "../Services/HousesService.js";
import store from "../store.js";

//Private
function _draw() {
  let houses = store.State.houses;
  let housesElem = document.getElementById("houses");
  let template = "";

  houses.forEach(house => {
    template += house.Template;
  });

  housesElem.innerHTML = template;
}

//Public
export default class HousesController {
  constructor() {
    store.subscribe("houses", _draw);
    this.getAllHouses();
    console.log(store.State.houses)
  }

  getAllHouses() {
    HousesService.getHouses();
  }

  addHouse(event) {
    event.preventDefault();

    // NOTE formData is an alias for our submitted form from our html
    let formData = event.target;
    // NOTE newcar is an object with all the inputted values from our form
    let newHouse = {

      _id: formData._id.value,
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      imgUrl: formData.imgUrl.value,
      levels: formData.levels.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value

    };
    console.log(newHouse);
    HousesService.addHouse(newHouse);
    formData.reset();
    // @ts-ignore
    $("#car-form").modal("toggle");
  }
  removeImg(id) {
    debugger;
    HousesService.editHouse(id, { imgUrl: "//placehold.it/200x200" });
  }

  delete(id) {
    HousesService.deleteHouse(id);
  }
}
