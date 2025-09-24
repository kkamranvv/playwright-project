export class LoginPage {
  page: any;
  loginLink: string;
  usernameInput: string;
  passwordInput: string;
  loginButton: string;

  constructor(page: any) {
    this.page = page;
    this.loginLink = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = "//button[normalize-space()='Log in']";
  }

  async gotoLoginPage() {
    await this.page.goto("https://demoblaze.com/");
  }

  async login(username: any, password: any) {
    await this.page.click(this.loginLink);

    await this.page.fill(this.usernameInput, username);

    await this.page.fill(this.passwordInput, password);

    await this.page.click(this.loginButton);
  }
}
