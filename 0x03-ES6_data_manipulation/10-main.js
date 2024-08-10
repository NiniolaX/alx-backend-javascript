import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

updateUniqueItems([1, 2, 3, 4]);
updateUniqueItems();
updateUniqueItems({'Apples': 10, 'Tomatoes': 10, 'Pasta': 1, 'Rice': 1, Banana: 5,});