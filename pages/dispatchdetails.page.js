const { assert } = require("chai");

class DispatchDetails {

    get title() {
        return $('//android.widget.ScrollView[@content-desc="test-CHECKOUT: COMPLETE!"]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get orderDispatchDetails() {
        return $('//android.widget.ScrollView[@content-desc="test-CHECKOUT: COMPLETE!"]/android.view.ViewGroup/android.widget.TextView[2]')
    }

    checkDispatchDetails(expectedTitle, expectedOrderDetails) {
        this.title.isDisplayed();
        const actualTitle = this.title.getText();
        assert.equal(actualTitle, expectedTitle);

        this.orderDispatchDetails.isDisplayed();
        const actualOrderDetails = this.orderDispatchDetails.getText();
        assert.equal(actualOrderDetails, expectedOrderDetails);

    }

}
module.exports = new DispatchDetails();