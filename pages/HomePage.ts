export class HomePage {
  page: any;
  productList: string;
  addToCartBtn: string;
  cart: string;

  constructor(page: any) {
    this.page = page;
    this.productList = "xpath=//*[@id='tbodyid']/div/div/div/h4/a";
    this.addToCartBtn = ".btn.btn-success.btn-lg";

    this.cart = "#cartur";
  }

  async addProductToCart(productName: string) {
    const productList = await this.page.$$(this.productList);
    for (const product of productList) {
      if (productName === (await product.textContent())) {
        await product.click();
        break;
      }
    }
    await this.page.on("dialog", async (dialog: any) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }
    });
  }

  async gotoCart() {
    await this.page.click(this.cart);
  }
}
