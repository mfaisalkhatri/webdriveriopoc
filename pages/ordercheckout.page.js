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

    async checkCartDetails(expectedProductName, expectedProductPrice, expectedProductDesc) {
        await this.cart.isDisplayed();
        await this.cart.click();
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

    async clickOnCheckout() {
        await this.btnCheckout.isDisplayed();
        await this.btnCheckout.click();
    }
}

module.exports = new OrderCheckOutPage();