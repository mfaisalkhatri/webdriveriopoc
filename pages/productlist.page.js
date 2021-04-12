class ProductListPage {

    get backpackProduct() {
        return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.view.ViewGroup/android.widget.ImageView')
    }
    get productName() {
        return $('(//android.widget.TextView[@content-desc="test-Item title"])[1]')
    }

    get productPrice() {
        return $('(//android.widget.TextView[@content-desc="test-Price"])[1]')
    }
    get btnAddToCart() {
        return $('//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]')
    }


    getProductPrice() {
        return this.productPrice.getText();
    }

    getProductName() {
        return this.productName.getText();
    }

    clickProductDetailsCard() {
        this.backpackProduct.isDisplayed();
        this.backpackProduct.click()
    }


    selectBackPackProduct() {
        this.btnAddToCart.isDisplayed();
        this.btnAddToCart.click();
    };
}
module.exports = new ProductListPage();