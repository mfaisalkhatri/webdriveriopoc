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


    verifyCheckoutDetails(expectedProductName, expectedProductDesc, expectedProductPrice, expectedItemPrice,
        expectedTaxAmt, expectedTotalAmt) {

        this.productName.isDisplayed();
        const actualProductName = this.productName.getText();
        assert.equal(actualProductName, expectedProductName);

        this.productDesc.isDisplayed();
        const actualProductDesc = this.productDesc.getText();
        assert.equal(actualProductDesc, expectedProductDesc);

        this.productPrice.isDisplayed();
        const actualProductPrice = this.productPrice.getText();
        assert.equal(actualProductPrice, expectedProductPrice);

        this.itemPrice.isDisplayed();
        const actualItemPrice = this.itemPrice.getText();
        assert.equal(actualItemPrice, expectedItemPrice);

        this.taxAmount.isDisplayed();
        const actualTaxAmount = this.taxAmount.getText();
        assert.equal(actualTaxAmount, expectedTaxAmt);

        this.totalAmount.isDisplayed();
        const actualTotalAmount = this.totalAmount.getText();
        assert.equal(actualTotalAmount, expectedTotalAmt);

    }

    completeOrder() {
        Gestures.swipeUp(0.5);
        this.btnFinish.isDisplayed();
        this.btnFinish.click()
    }
}
module.exports = new OrderCompletionPage();