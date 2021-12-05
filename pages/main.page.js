class MainPage {

    get menuIcon() {
        return $('~test-Menu')
    }

    get logoutLink() {
        return $('~test-LOGOUT')
    }
    async logout() {
        await this.menuIcon.click();
        await this.logoutLink.click();
    }

}


module.exports = new MainPage();