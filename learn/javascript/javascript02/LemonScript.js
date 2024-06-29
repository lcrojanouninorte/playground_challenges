const DISHES = require("./Dish");

function CalculatePrice(addTax = false) {
  const dishes = DISHES.map(dish => {
    const dishPrice = addTax ? dish.price * 1.2 : dish.price;
    return `Dish: ${dish.name} Price (incl.tax): $ ${dishPrice.toFixed(2)}`;
  });

  return dishes;
}

module.exports = CalculatePrice;