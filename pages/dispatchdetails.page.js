const { assert } = require("chai");

class DispatchDetails {

    get title() {
        return $('//android.widget.ScrollView[@content-desc="test-CHECKOUT: COMPLETE!"]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get orderDispatchDetails() {
        return $('//android.widget.ScrollView[@content-desc="test-CHECKOUT: COMPLETE!"]/android.view.ViewGroup/android.widget.TextView[2]')
    }

    async checkDispatchDetails(expectedTitle, expectedOrderDetails) {
        await this.title.isDisplayed();
        const actualTitle = await this.title.getText();
        assert.equal(actualTitle, await expectedTitle);

        await this.orderDispatchDetails.isDisplayed();
        const actualOrderDetails = await this.orderDispatchDetails.getText();
        assert.equal(actualOrderDetails, await expectedOrderDetails);

    }

}
module.exports = new DispatchDetails();