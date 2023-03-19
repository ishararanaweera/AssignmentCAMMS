import { Selector, t } from 'testcafe';

// Defining the ProductsPage class
export default class ProductsPage {

  // Declaring private properties with type Selector
  private readonly pageTitle: Selector;
  private readonly productsList: Selector;
  private readonly productPrice: Selector;
  private readonly addToCartButtons: Selector;
  private readonly btnAddToCart: Selector;
  private readonly btnCart: Selector;

  // Constructor to initialize the private properties with selectors
  constructor() {
    this.pageTitle = Selector('span.title');
    this.productsList = Selector('.inventory_list');
    this.productPrice = this.productsList.find('.inventory_item_price').withText('$49.99');
    this.addToCartButtons = this.productsList.find('.btn_primary');
    this.btnAddToCart = this.productsList.find('.btn_primary');
    this.btnCart = Selector('.shopping_cart_link');
  }

  // Method to get the page title
  public async getPageTitle(): Promise<string> {
    return await this.pageTitle.innerText;
  }
  
  // Method to verify the price of Fleece Jacket
  public async verifyFleeceJacketPrice(): Promise<void> {
    const productPriceText = await this.productPrice.innerText;
  
    //Perform an assertion on the value of productPriceText and Check that productPriceText is equal to the string '$49.99'.
    await t
      .expect(productPriceText)
      .eql('$49.99', 'Incorrect price for Sauce Labs Fleece Jacket');
  }

  // Method to add products to cart
  public async addProductsToCart(): Promise<void> {
    await t
        
      .wait(3000)
      .click(this.btnAddToCart.nth(0))// Clicking the Add to Cart button for the first product
      .wait(5000)
      .click(this.btnAddToCart.nth(1))// Clicking the Add to Cart button for the second product
      .wait(5000)
      .click(this.btnCart);// Clicking the Cart button to go to the Cart page
  }

  // Method to navigate to the Cart page
  public async navigateToCart(): Promise<void> {
    await t.click(this.btnCart);
  }
}