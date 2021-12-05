const { assert, expect } = require('chai');
const LoginPage = require('../../pages/login.page');
const MainPage = require('../../pages/main.page');


describe('Sauce Labs Demo App Login Functionality Tests', async() => {
    const password = 'secret_sauce';

    it('should not allow login to locked out user', async() => {
        await LoginPage.login('locked_out_user', password);
        assert.equal(await LoginPage.getMessageText(),
            'Sorry, this user has been locked out.');

    });

    it('should not allow login with invalid credentials', async() => {
        await LoginPage.login('faisal_khatri', password);
        assert.equal(await LoginPage.getMessageText(),
            'Username and password do not match any user in this service.');

    });

    it('should allow login with valid credentials', async() => {
        await LoginPage.login('standard_user', password);
        await MainPage.menuIcon.isDisplayed();
        await MainPage.logout();
    });
});