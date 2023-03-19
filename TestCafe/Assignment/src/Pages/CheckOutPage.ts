import { Selector, t } from 'testcafe';
import * as faker from 'faker';

// Declaring private properties
export default class CheckoutPage {
  private readonly inputFirstName: Selector;
  private readonly inputLastName: Selector;
  private readonly inputZip: Selector;
  private readonly btnContinue: Selector;
  private readonly btnFinish: Selector;

  // Constructor to initialize the private properties with selectors
  constructor() {
    this.inputFirstName = Selector('#first-name');
    this.inputLastName = Selector('#last-name');
    this.inputZip = Selector('#postal-code');
    this.btnContinue = Selector('.btn_primary.cart_button');
    this.btnFinish = Selector('.btn_action.cart_button');
  }

  // Method to provide personal information during checkout
  async providePersonalInformation() {

    // Generate fake data using faker library
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const zip = faker.address.zipCode();

    // Fill the checkout form with the generated fake data and continue
    await t
      .typeText(this.inputFirstName, firstName)
      .typeText(this.inputLastName, lastName)
      .typeText(this.inputZip, zip)
      .click(this.btnContinue);
  }

  // Method to finish checkout
  async finishCheckout() {
    await t.click(this.btnFinish);
  }
}
