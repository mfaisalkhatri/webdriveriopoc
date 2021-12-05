/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('~test-Username') }
    get inputPassword() { return $('~test-Password') }
    get btnLogin() { return $('~test-LOGIN') }

    // This method uses xpath locator.
    get messageForInvalidLogin() {
        return $('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async getMessageText() {
        await this.messageForInvalidLogin.isDisplayed();
        return await this.messageForInvalidLogin.getText();
    }
    async login(username, password) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.clearValue();
        await this.inputUsername.setValue(username);
        await this.inputPassword.clearValue();
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();