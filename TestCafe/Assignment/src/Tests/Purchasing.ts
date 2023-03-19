import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../Pages/CartPage';
import { Selector, t } from 'testcafe';
import CheckoutPage from '../Pages/CheckOutPage';

// Defining the test fixture for Saucedemo Automated Test
fixture`Saucedemo Automated Test`
  .page`https://www.saucedemo.com`
  // Executed before each test to log in with standard_user and secret_sauce credentials
  .beforeEach(async () => {
    const loginPage = new LoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
  });

// Defining the test case
test('Verify Sauce Labs Fleece Jacket price, Add Sauce Labs Fleece Jacket to cart and verify price in cart,Verify selected items are in the cart and Checkout ', async () => {
  const productsPage = new ProductsPage();
  await productsPage.verifyFleeceJacketPrice();
  await productsPage.addProductsToCart();
  await productsPage.navigateToCart();
  const cartPage = new CartPage()
  const cartItems: string[] = await cartPage.getCartItems();// Retrieving cart items
  await cartPage.verifyCartItemsFunc(['Sauce Labs Backpack', 'Sauce Labs Fleece Jacket']);
  await cartPage.checkout();
  const checkoutPage = new CheckoutPage();
  await checkoutPage.providePersonalInformation();
  await checkoutPage.finishCheckout();
  
});