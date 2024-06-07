class CartPage {
    locators = {
        checkoutButton: () => cy.get('#checkout').should('be.visible'),
        firstNameInputField: () => cy.get('#first-name').should('be.visible'),
        lastNameInputField: () => cy.get('#last-name').should('be.visible'),
        postalCodeInputField: () => cy.get('#postal-code').should('be.visible'),
        continueButton: () => cy.get('#continue').should('be.visible'),
        inventoryItemNames: () => cy.get(".inventory_item_name").should('be.visible'),
        totalPrice: () => cy.get('.summary_total_label').should('be.visible'),
        finishButton: () => cy.get('#finish').should('be.visible'),
        successMessage: () => cy.get('.complete-header').should('be.visible'),



    }

    clickOnCheckoutButton() {
        this.locators
            .checkoutButton()
            .click()
        return this
    }

    insertInformationInCheckOutPage(text, locator) {
        locator()
            .click()
            .clear()
            .type(text)
        return this
    }

    clickOnContinueButton() {
        this.locators
            .continueButton()
            .click()
        return this
    }
    verifyItemName(itemName) {
        this.locators
            .inventoryItemNames()
            .contains(itemName)
        return this

    }
    verifyItemNamesInCheckoutOverView(itemArray) {
        for (let i = 0; i < itemArray.length; i++) {
            this.verifyItemName(itemArray[i])
        }
        return this
    }
    verifyTotalPrice(total) {
        this.locators
            .totalPrice()
            .contains(total)
        return this
    }

    clickOnFinishButton() {
        this.locators
            .finishButton()
            .contains('Finish')
            .click()
        return this
    }

    verifyOrderComplete() {
        this.locators
            .successMessage()
            .invoke('text')
            .should('contain', 'Thank you for your order!')
    }



}
export default new CartPage()