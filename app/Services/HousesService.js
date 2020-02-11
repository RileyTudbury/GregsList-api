import store from "../store.js";
import House from "../Models/House.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 3000
});

class HousesService {
  getHouses() {
    _api
      .get("")
      .then(res => {
        let apiHouses = res.data.data.map(c => new House(c));
        store.commit("cars", apiHouses);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getHouseById(id) {
    _api.get(id);
  }

  addHouse(newHouse) {
    _api
      .post("", newHouse)
      .then(res => {
        let newApiHouse = new House(res.data.data);
        //NOTE Gets houses from the state and adds additional house into new array
        let houses = [...store.State.houses, newApiHouse];
        store.commit("houses", houses);
      })
      .catch(error => {
        console.error(error);
      });
  }

  editHouse(id, update) {
    _api
      .put(id, update)
      .then(res => {
        let house = store.State.houses.find(h => h._id == id);
        //NOTE both these methods apply the changes to the original object
        //house = { ...house, ...update };
        for (let prop in update) {
          house[prop] = update[prop];
        }
        store.commit("houses", store.State.houses);
      })
      .catch(error => {
        console.error(error);
      });
  }

  deleteHouse(id) {
    _api
      .delete(id)
      .then(() => {
        let filteredHouses = store.State.houses.filter(h => h._id != id);
        store.commit("houses", filteredHouses);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const service = new HousesService();
export default service;

//GETALL
//site/api/COLLECTIONNAME

//GETONE
//site/api/COLLECTIONNAME/ID

//CREATE
//site/api/COLLECTIONNAME

//EDIT
//site/api/COLLECTIONNAME/ID

//DELETE
//site/api/COLLECTIONNAME/ID
