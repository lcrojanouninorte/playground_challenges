
function Dish(name, price){
    this.name = name;
    this.price = price;
}

const DISHES = [
    new Dish("Italian pasta", 9.55),
    new Dish("Rice with veggies", 8.65),
    new Dish("Chicken with potatoes", 15.55),
    new Dish("Vegetarian Pizza", 6.45),
 

]

module.exports = DISHES;