//@ts-check
const DISHES = require("./Dish");
const { describe } = require("node:test")
const CalculatePrice = require("./LemonScript")
const { test, expect } = require('@jest/globals');


describe("LemonScript Tests", () => {
    test("CalculatePrice function should exist", () => {
      expect(CalculatePrice).toBeDefined();
    });
  
    test("CalculatePrice should return list without tax", () => {
      const result = CalculatePrice(false);
  
      expect(result).toContain("Dish: Italian pasta Price (incl.tax): $ 9.55");
      expect(result).toContain("Dish: Rice with veggies Price (incl.tax): $ 8.65");
      expect(result).toContain("Dish: Chicken with potatoes Price (incl.tax): $ 15.55");
      expect(result).toContain("Dish: Vegetarian Pizza Price (incl.tax): $ 6.45");
    });
  
    test("CalculatePrice should return list with 20% tax", () => {
      const result = CalculatePrice(true);
  
      expect(result).toContain("Dish: Italian pasta Price (incl.tax): $ 11.46");
      expect(result).toContain("Dish: Rice with veggies Price (incl.tax): $ 10.38");
      expect(result).toContain("Dish: Chicken with potatoes Price (incl.tax): $ 18.66");
      expect(result).toContain("Dish: Vegetarian Pizza Price (incl.tax): $ 7.74");
    });
  });