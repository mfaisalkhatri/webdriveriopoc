const { assert } = require("chai");

class OrderCheckOutPage {

    get cart() {
        return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')
    }
    get productName() {
        return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[1]')
    }
    get productDesc() {
        return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[2]')
    }
    get productPrice() { return $('//android.view.ViewGroup[@content-desc="test-Price"]/android.widget.TextView') }
    get btnCheckout() { return $('~test-CHECKOUT') }

    checkCartDetails(expectedProductName, expectedProductPrice, expectedProductDesc) {
        this.cart.isDisplayed();
        this.cart.click();
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

    clickOnCheckout() {
        this.btnCheckout.isDisplayed();
        this.btnCheckout.click();
    }
}

module.exports = new OrderCheckOutPage();