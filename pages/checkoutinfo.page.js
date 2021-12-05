class CheckoutInfoPage {

    get firstName() { return $('~test-First Name') }
    get lastName() { return $('~test-Last Name') }
    get postalCode() { return $('~test-Zip/Postal Code') }
    get btnContinue() { return $('~test-CONTINUE') }

    async enterDetailsToCheckout(firstName, lastName, postalCode) {
        await this.firstName.isDisplayed();
        await this.firstName.clearValue();
        await this.firstName.setValue(firstName)

        await this.lastName.isDisplayed();
        await this.lastName.clearValue();
        await this.lastName.setValue(lastName)

        await this.postalCode.isDisplayed();
        await this.postalCode.clearValue();
        await this.postalCode.setValue(postalCode);

        await this.btnContinue.isDisplayed();
        await this.btnContinue.click();
    }

}

module.exports = new CheckoutInfoPage();