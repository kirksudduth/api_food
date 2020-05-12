console.log("It's going to get harder before it gets easier.");

const foodURL = "http://localhost:8088/food";

const foodAPI = {
  getFood() {
    return fetch(`${foodURL}`).then((foods) => foods.json());
  },
  deleteFood(id) {
    return fetch(`${foodURL}/${id}`, {
      method: "DELETE",
    });
  },
};

export default foodAPI;
