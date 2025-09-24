export class CartPage {
  page: any;
  productCheck: string;

  constructor(page: any) {
    this.page = page;
    this.productCheck = "td:nth-child(2)";
  }

  async checkProductInCart(productName: string): Promise<boolean> {
    const cartItems = this.page.locator("//tr/td[2]");
    const count = await cartItems.count();

    for (let i = 0; i < count; i++) {
      const text = (await cartItems.nth(i).textContent()) ?? "";
      if (text.trim().includes(productName)) {
        return true;
      }
    }

    return false;
  }
}
