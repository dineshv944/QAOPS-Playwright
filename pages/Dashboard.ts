import { Locator, Page } from '@playwright/test'

class Dashboard {

    readonly page: Page;
    readonly products: Locator;
    readonly dropdown: Locator;
    readonly pname: Locator;
    readonly addtocart: Locator;
    readonly cart: Locator;



    constructor(page: Page) {
        this.products = page.locator(".title");
        this.dropdown = page.locator(".product_sort_container");
        this.pname = page.locator(".inventory_item_name");
        this.addtocart = page.locator("#add-to-cart");
        this.cart = page.locator(".shopping_cart_link");
    }

    async productToCart(productName: string) {
        await this.dropdown.selectOption("Price (low to high)");
        await this.pname.filter({ hasText: productName }).click();

    }

    async addCart() {

        await this.addtocart.click();
        await this.cart.click();


    }
}

export { Dashboard }