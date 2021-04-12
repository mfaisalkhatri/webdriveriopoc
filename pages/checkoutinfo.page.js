class CheckoutInfoPage {

    get firstName() { return $('~test-First Name') }
    get lastName() { return $('~test-Last Name') }
    get postalCode() { return $('~test-Zip/Postal Code') }
    get btnContinue() { return $('~test-CONTINUE') }

    enterDetailsToCheckout(firstName, lastName, postalCode) {
        this.firstName.isDisplayed();
        this.firstName.clearValue();
        this.firstName.setValue(firstName)

        this.lastName.isDisplayed();
        this.lastName.clearValue();
        this.lastName.setValue(lastName)

        this.postalCode.isDisplayed();
        this.postalCode.clearValue();
        this.postalCode.setValue(postalCode);

        this.btnContinue.isDisplayed();
        this.btnContinue.click();
    }

}

module.exports = new CheckoutInfoPage();