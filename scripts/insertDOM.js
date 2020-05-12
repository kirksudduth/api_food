// dependencies DOMelement.js
import makeDomElement from "./DOMelement.js";
const foodList = document.getElementById("foodList");
const addFoodList = (list) => {
  list.forEach((recipe) => (foodList.innerHTML += makeDomElement(recipe)));
};

export default addFoodList;
