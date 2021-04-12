const { assert, expect } = require('chai');
const LoginPage = require('../../pages/login.page');
const MainPage = require('../../pages/main.page');


describe('Sauce Labs Demo App Login Functionality Tests', () => {
    const password = 'secret_sauce';

    it('should not allow login to locked out user', () => {
        LoginPage.login('locked_out_user', password);
        assert.equal(LoginPage.getMessageText(),
            'Sorry, this user has been locked out.');

    });

    it('should not allow login with invalid credentials', () => {
        LoginPage.login('faisal_khatri', password);
        assert.equal(LoginPage.getMessageText(),
            'Username and password do not match any user in this service.');

    });

    it('should allow login with valid credentials', () => {
        LoginPage.login('standard_user', password);
        MainPage.menuIcon.isDisplayed();
        MainPage.logout();
    });
});


