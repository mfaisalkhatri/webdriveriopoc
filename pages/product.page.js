import Gestures from '../test/helpers/Gestures.js';
const { assert } = require("chai");

class ProductPage extends Gestures {

    get productName() {
        return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[1]')
    }
    get productDesc() {
        return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[2]')
    }
    get productPrice() { return $('~test-Price') }
    get btnAddToCart() { return $('~test-ADD TO CART') }


    checkProductDetails(expectedProductName, expectedProductDesc, expectedProductPrice) {
        this.productName.isDisplayed();
        const actualProductName = this.productName.getText();
        assert.equal(actualProductName, expectedProductName);

        this.productDesc.isDisplayed();
        const actualProductDesc = this.productDesc.getText();
        assert.equal(actualProductDesc, expectedProductDesc);

        this.productPrice.isDisplayed();
        const actualProductPrice = this.productPrice.getText();
        assert.equal(actualProductPrice, expectedProductPrice);
    }

    clickAddToCartButton() {
        Gestures.swipeUp(0.5);
        this.btnAddToCart.click();
    }
}

module.exports = new ProductPage();