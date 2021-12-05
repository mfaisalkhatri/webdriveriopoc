const { assert } = require('chai');
const LoginPage = require('../../pages/login.page');
const MainPage = require('../../pages/main.page');
const ProductListPage = require('../../pages/productlist.page');
const ProductPage = require('../../pages/product.page');
const OrdercheckoutPage = require('../../pages/ordercheckout.page');
const CheckoutinfoPage = require('../../pages/checkoutinfo.page');
const OrdercompletionPage = require('../../pages/ordercompletion.page');
const DispatchDetailsPage = require('../../pages/dispatchDetails.page');

describe('Buy a product and complete checkout user journey', () => {
    const price = "$29.99";
    const productName = "Sauce Labs Backpack";
    const productDesc = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';
    const password = 'secret_sauce';

    it('should login into the app', async() => {
        await LoginPage.login('standard_user', password);
        await MainPage.menuIcon.isDisplayed();
    });

    it('should select a product to buy', async() => {
        assert.equal(await ProductListPage.getProductName(), productName);
        await ProductListPage.getProductPrice();
        assert.equal(await ProductListPage.getProductPrice(), price);
        // ProductListPage.selectBackPackProduct();
        await ProductListPage.clickProductDetailsCard();
        await ProductPage.checkProductDetails(productName, productDesc, price);
        await ProductPage.clickAddToCartButton();
    });

    it('should display the correct added product in the cart and then checkout', async() => {
        await OrdercheckoutPage.checkCartDetails(productName, price, productDesc);
        await OrdercheckoutPage.clickOnCheckout();

    });

    it('should fill in the order details and click on Continue', async() => {
        await CheckoutinfoPage.enterDetailsToCheckout('Faisal', 'Khatri', '998110');

    });

    it('should check the order details and click on finish to complete the order', async() => {
        const itemPrice = 'Item total: $29.99';
        const tax = 'Tax: $2.40';
        const totalAmt = 'Total: $32.39';

        await OrdercompletionPage.verifyCheckoutDetails(productName, productDesc, price, itemPrice, tax, totalAmt);
        await OrdercompletionPage.completeOrder();
    });

    it('should verify the dispatch details', async() => {
        const title = 'THANK YOU FOR YOU ORDER';
        const orderDetails = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';
        await DispatchDetailsPage.checkDispatchDetails(title, orderDetails);
    });

});