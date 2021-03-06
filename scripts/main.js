import foodAPI from "./foodAPI.js";
import addFoodList from "./insertDOM.js";

const getAndRenderFood = () => {
  addFoodList.innerHTML = "";
  foodAPI.getFood().then(addFoodList);
};
getAndRenderFood();

document.getElementById("foodList").addEventListener("click", (event) => {
  if (event.target.id.startsWith("delete--")) {
    const foodID = event.target.id.split("--")[1];
    foodAPI.deleteFood(foodID).then(getAndRenderFood);
  }
});
