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

    getMessageText() {
        this.messageForInvalidLogin.isDisplayed();
        return this.messageForInvalidLogin.getText();
    }
    login(username, password) {
        this.inputUsername.clearValue();
        this.inputUsername.setValue(username);
        this.inputPassword.clearValue();
        this.inputPassword.setValue(password);
        this.btnLogin.click();
    }
}

module.exports = new LoginPage();
