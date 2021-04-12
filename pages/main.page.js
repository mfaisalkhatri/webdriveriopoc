class MainPage {

    get menuIcon() {
        return $('~test-Menu')
    }

    get logoutLink() {
        return $('~test-LOGOUT')
    }
    logout() {
        this.menuIcon.click();
        this.logoutLink.click();
    }

}


module.exports = new MainPage();