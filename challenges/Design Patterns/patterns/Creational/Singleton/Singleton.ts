const PRODUCTS: Product[] = [
  { name: "apple", id: 1, cost: 2000 },
  { name: "banana", id: 2, cost: 500 },
  { name: "coconut", id: 3, cost: 3000 },
  { name: "meat", id: 4, cost: 20000 },
  { name: "pineapple", id: 5, cost: 1000 },
  { name: "coke", id: 6, cost: 1800 },
] as Product[];

interface Product {
  id: number;
  name: string;
  cost: number;
  getName(): string;
  getCost(): number;
  getId(): number;
}

interface cart {
  add(product: Product): void;
  deleteById(id: number): void;
  getInstance(client: string): ShoppingCart;
}

class ShoppingCart implements cart {
  private products: Product[] = [];
  private constructor() {}

  static usersCarts: Record<string, ShoppingCart> = {};

  static getInstance(client: string): ShoppingCart {
    return this.usersCarts[client]
      ? this.usersCarts[client]
      : new ShoppingCart();
  }

  add(product: Product): void {
    this.products.push(product);
  }

  deleteById(id: number): void {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }
  }

  getTotal(): number {
    return this.products.reduce((total, product) => total + product.cost, 0);
  }
}

function clientApp() {
    const cartUser1 = ShoppingCart.getInstance("Client_1");
    const cartUser2 = ShoppingCart.getInstance("Client_2");
    const cartUser3 = ShoppingCart.getInstance("Client_3");
  
    cartUser1.add(PRODUCTS[0]);
    cartUser1.add(PRODUCTS[1]);
  
    cartUser2.add(PRODUCTS[2]);
    cartUser2.add(PRODUCTS[3]);
  
    cartUser3.add(PRODUCTS[4]);
    cartUser3.add(PRODUCTS[5]);
  
    // Display the cart contents and total cost for each user
    console.info("Cart Contents and Total Cost for Each User:");
  
    console.log("Client 1 Cart:");
    console.log("Cart Contents:", cartUser1);
    console.log("Total Cost:", cartUser1.getTotal());
  
    console.log("Client 2 Cart:");
    console.log("Cart Contents:", cartUser2);
    console.log("Total Cost:", cartUser2.getTotal());
  
    console.log("Client 3 Cart:");
    console.log("Cart Contents:", cartUser3);
    console.log("Total Cost:", cartUser3.getTotal());
  
    cartUser1.deleteById(PRODUCTS[0].id);
    cartUser2.deleteById(PRODUCTS[2].id);
    cartUser3.deleteById(PRODUCTS[4].id);
  
    // Display the updated cart contents and total cost for each user
    console.info("Cart Contents and Total Cost After Deletion for Each User:");
  
    console.log("Client 1 Cart:");
    console.log("Cart Contents:", cartUser1);
    console.log("Total Cost:", cartUser1.getTotal());
  
    console.log("Client 2 Cart:");
    console.log("Cart Contents:", cartUser2);
    console.log("Total Cost:", cartUser2.getTotal());
  
    console.log("Client 3 Cart:");
    console.log("Cart Contents:", cartUser3);
    console.log("Total Cost:", cartUser3.getTotal());
}

clientApp();
