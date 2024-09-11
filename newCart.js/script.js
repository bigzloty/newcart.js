class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  //Create ShoppingCartItem Class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }

  //Create ShoppingCart Class

  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      // Check if the product is already in the cart
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        // If it exists, update the quantity
        existingItem.quantity += quantity;
      } else {
        // Otherwise, add a new item
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    displayCart() {
      if (this.items.length === 0) {
        console.log("Your cart is empty.");
      } else {
        console.log("Your cart contains:");
        this.items.forEach(item => {
          console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
        });
        console.log(`Total Items: ${this.getTotalItems()}`);
        console.log(`Total Price: $${this.getTotalPrice().toFixed(2)}`);
      }
    }
  }
  

  //Testing the Classes
// Create products
const product1 = new Product(1, 'Laptop', 1200);
const product2 = new Product(2, 'Mouse', 25);
const product3 = new Product(3, 'Keyboard', 45);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
cart.displayCart();

// Remove an item (e.g., the mouse)
cart.removeItem(2);

// Display the cart after removing an item
cart.displayCart();
