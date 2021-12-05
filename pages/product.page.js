const { default: Gestures } = require("../test/helpers/Gestures")
const { assert } = require("chai");

class ProductPage {

    get productName() {
        return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[1]')
    }
    get productDesc() {
        return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[2]')
    }
    get productPrice() { return $('~test-Price') }
    get btnAddToCart() { return $('~test-ADD TO CART') }


    async checkProductDetails(expectedProductName, expectedProductDesc, expectedProductPrice) {
        await this.productName.isDisplayed();
        const actualProductName = await this.productName.getText();
        assert.equal(actualProductName, await expectedProductName);

        await this.productDesc.isDisplayed();
        const actualProductDesc = await this.productDesc.getText();
        assert.equal(actualProductDesc, await expectedProductDesc);

        await this.productPrice.isDisplayed();
        const actualProductPrice = await this.productPrice.getText();
        assert.equal(actualProductPrice, await expectedProductPrice);
    }

    async clickAddToCartButton() {
        await Gestures.swipeUp(0.7);
        await this.btnAddToCart.click();
    }
}

module.exports = new ProductPage();