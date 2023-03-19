import { Selector, t } from 'testcafe';

// Defining the CartPage class
export default class CartPage {

    // Declaring private properties
    cartItems: Selector;
    btnCheckout: Selector;
    verifyCartItemsFunc: any;
    static cartItems: any;

    // Constructor to initialize the private properties with selectors
    constructor() {
        this.cartItems = Selector('.cart_item .inventory_item_name');
        this.btnCheckout = Selector('#checkout');
        this.verifyCartItemsFunc = async function(itemNames: string[]) {
        const cartItems = await CartPage.cartItems;
        const cartItemNames = [];    
        };
    } 

    //Defining a method that returns a Promise of an array of strings
    public async getCartItems(): Promise<string[]> {
        const cartItemElements = await this.cartItems;
        //Creating an empty array to hold the cart item names
        const cartItems: string[] = [];
        // Creating an array of arrays, the inner array contains the cartItems array
        const itemNames = [cartItems];
    return cartItems;
  }

  //Defining a method that accepts an array of itemNames and returns a Promise of void
  public async verifyCartItems(itemNames: string[]): Promise<void> {
    const cartItemElements = await this.cartItems;
    // Creating an empty that will hold the cart item names
    const cartItems: string[] = [];
    // Looping through the cartItemElements Selector and Pushing each cart item's name into the cartItems array
    for (let i = 0; i < cartItemElements.length; i++) {
      cartItems.push(await cartItemElements.nth(i).innerText);
    }
    
    //Check if the cartItems array contains each item in the itemNames array
    for (let itemName of itemNames) {
      await t.expect(cartItems).contains(itemName, `Cart does not contain item: ${itemName}`);
    }
  }

  //Defining an async method named checkout that clicks the btnCheckout Selector
  public async checkout() {
    await t.click(this.btnCheckout);
  }
}