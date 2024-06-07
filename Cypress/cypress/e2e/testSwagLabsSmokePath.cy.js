import { it } from "mocha";
import cartPage from "../page/cartPage";
import homePage from "../page/homePage";
import loginpage from "../page/loginpage"


let username = "standard_user";
let password = "secret_sauce";
let totalPrice = '123.07';
let leftNavigationPanelItems = ['All Items', 'About', 'Logout', 'Reset App State'];
let itemsPrice = ['29.99', '9.99', '15.99', '49.99', '7.99'];
let selectedItemNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie']
let productDetails = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';


describe('verify that user can login to the website using the user name and password', () => {
    before('This will run before all  the test cases', () => {
        cy.visit('https://www.saucedemo.com/')

    })

    it('ATO-T01: verify that user can login to the website using the user name and password', () => {
        loginpage
            .insertTextInUsernameInputField(username)
            .insertTextInPasswordInputField(password)
            .clickOnLoginButton()
        homePage.verifyHomePageLanding()
    })

    it('ATO-T02: Verify Left Nevigation Panel', () => {
        homePage
            .clickOnSidePanelHamBurgerButton()
            .verifyLeftNavigationPanelItems(leftNavigationPanelItems)
            .clickOnSidePanelHamBurgerCloseButton()
    })
    it('ATO-T03: verify a product descreption', () => {
        homePage
            .openInventoryItem('Sauce Labs Backpack')
            .verifyInventoryDescription(productDetails)
            .clickOnBackToProductButton()
    })


    it('ATO-T04: Verify Add Multiple Prodduct to Cart', () => {
        homePage
            .addMultipleProductToCart(5)
            .clickOnShopingCartButton()
            .verifyInventoryItemsPrice(itemsPrice)
    })

    it('ATO-T05: Verify the product in the cart page and checkout', () => {
        homePage
            .verifyInventoryItemsPrice(itemsPrice)
        cartPage
            .clickOnCheckoutButton()
            .insertInformationInCheckOutPage("Al", cartPage.locators.firstNameInputField)
            .insertInformationInCheckOutPage("Masum", cartPage.locators.lastNameInputField)
            .insertInformationInCheckOutPage("1212", cartPage.locators.postalCodeInputField)
            .clickOnContinueButton()

    })

    it('ATO-T06: verify the selected product and prices in the checkout overview page', () => {
        cartPage
            .verifyItemNamesInCheckoutOverView(selectedItemNames)
        homePage
            .verifyInventoryItemsPrice(itemsPrice)

    })
    it('ATO-T07: verify total price and validate the order place succession', () => {

        cartPage
            .verifyTotalPrice(totalPrice)
            .clickOnFinishButton()
            .verifyOrderComplete()
    })

    // it('ATO-T01: Verify order details with soft assertions', () => {
    //     cy.softAssert(homePage.verifyInventoryItemsPrice(itemsPrice), 'Item prices should match');
    //     cy.softAssert(cartPage.verifyItemNamesInCheckoutOverView(selectedItemNames), 'Item names in checkout should match');
    //     cy.softAssert(cartPage.verifyTotalPrice(totalPrice), 'Total price should match');

    //     cy.softAssertAll();
    // });
    //npx cypress run --spec cypress/e2e/testSwagLabsSmokePath.cy.js
})