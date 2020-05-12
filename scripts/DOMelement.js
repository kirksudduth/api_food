// dependencies foodAPI.js
import foodAPI from "./foodAPI.js";
const makeDomElement = (object) => {
  return `
  <section id="foodCard">
    <h3 class="name">Name: ${object.name}</h3>
    <p class="category">Category: ${object.category}</p>
    <p class="ethnicity">Ethnicity: ${object.ethnicity}</p>
    <button id="delete--${object.id}">Delete</button>
    </section>
    `;
};

export default makeDomElement;
