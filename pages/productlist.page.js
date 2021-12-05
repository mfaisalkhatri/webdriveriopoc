class ProductListPage {

    get backpackProduct() {
        return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.view.ViewGroup/android.widget.ImageView')
    }
    get productName() {
        return $('(//android.widget.TextView[@content-desc="test-Item title"])[1]')
    }

    get productPrice() {
        return $('(//android.widget.TextView[@content-desc="test-Price"])[1]')
    }
    get btnAddToCart() {
        return $('//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]')
    }


    async getProductPrice() {
        return await this.productPrice.getText();
    }

    async getProductName() {
        return await this.productName.getText();
    }

    async clickProductDetailsCard() {
        await this.backpackProduct.isDisplayed();
        await this.backpackProduct.click()
    }


    async selectBackPackProduct() {
        await this.btnAddToCart.isDisplayed();
        await this.btnAddToCart.click();
    };
}
module.exports = new ProductListPage();