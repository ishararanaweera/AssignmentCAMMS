import { Selector, t } from 'testcafe';

// Defining the LoginPage class
export default class LoginPage {

  // Declaring three private properties with type Selector
  private readonly inputUsername: Selector;
  private readonly inputPassword: Selector;
  private readonly btnLogin: Selector;

  // Constructor to initialize the private properties with selectors
  constructor() {
    this.inputUsername = Selector('#user-name');
    this.inputPassword = Selector('#password');
    this.btnLogin = Selector('#login-button');
  }

  // Perform login action by entering username and password and clicking the login button
  public async login(username: string, password: string): Promise<void> {
    await t
      .typeText(this.inputUsername, username)
      .typeText(this.inputPassword, password)
      .click(this.btnLogin);
  }
}