console.log("It's going to get harder before it gets easier.");

const foodAPI = {
  getFood() {
    return fetch("http://localhost:8088/food").then((foods) => foods.json());
  },
};

export default foodAPI;
