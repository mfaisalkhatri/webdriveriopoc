const { assert } = require("chai")
const { default: Gestures } = require("../test/helpers/Gestures")

class OrderCompletionPage {

    get productName() { return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[1]') }
    get productDesc() { return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[2]') }
    get productPrice() { return $('//android.view.ViewGroup[@content-desc="test-Price"]/android.widget.TextView') }
    get itemPrice() { return $('//android.widget.ScrollView[@content-desc="test-CHECKOUT: OVERVIEW"]/android.view.ViewGroup/android.widget.TextView[5]') }
    get taxAmount() { return $('//android.widget.ScrollView[@content-desc="test-CHECKOUT: OVERVIEW"]/android.view.ViewGroup/android.widget.TextView[6]') }
    get totalAmount() { return $('//android.widget.ScrollView[@content-desc="test-CHECKOUT: OVERVIEW"]/android.view.ViewGroup/android.widget.TextView[7]') }
    get btnFinish() { return $('~test-FINISH') }


    async verifyCheckoutDetails(expectedProductName, expectedProductDesc, expectedProductPrice, expectedItemPrice,
        expectedTaxAmt, expectedTotalAmt) {

        await this.productName.isDisplayed();
        const actualProductName = await this.productName.getText();
        assert.equal(actualProductName, await expectedProductName);

        await this.productDesc.isDisplayed();
        const actualProductDesc = await this.productDesc.getText();
        assert.equal(actualProductDesc, await expectedProductDesc);

        await this.productPrice.isDisplayed();
        const actualProductPrice = await this.productPrice.getText();
        assert.equal(actualProductPrice, await expectedProductPrice);

        await this.itemPrice.isDisplayed();
        const actualItemPrice = await this.itemPrice.getText();
        assert.equal(actualItemPrice, await expectedItemPrice);

        await this.taxAmount.isDisplayed();
        const actualTaxAmount = await this.taxAmount.getText();
        assert.equal(actualTaxAmount, expectedTaxAmt);

        await this.totalAmount.isDisplayed();
        const actualTotalAmount = await this.totalAmount.getText();
        assert.equal(actualTotalAmount, await expectedTotalAmt);

    }

    async completeOrder() {
        await Gestures.swipeUp(0.7);
        await this.btnFinish.isDisplayed();
        await this.btnFinish.click()
    }
}
module.exports = new OrderCompletionPage();