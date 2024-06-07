class HomePage {

    locators = {
        appLogo: () => cy.get('.app_logo').should('be.visible'),
        sidePanelHamBurgerOpenButton: () => cy.get('#react-burger-menu-btn').should('be.visible'),
        sidePanelHamBurgerCloseButton: () => cy.get('#react-burger-cross-btn').should('be.visible'),
        leftNevigationPanelItem: () => cy.get(".bm-item.menu-item").should('be.visible'),
        addToCartButton: (i) => cy.get('.btn_inventory').eq(i).should('be.visible'),
        shppingCartButton: () => cy.get('.shopping_cart_link').should('be.visible'),
        inventoryItemsPrice: () => cy.get('.inventory_item_price').should('be.visible'),
        inventoryItemName: () => cy.get('.inventory_item_name ').should('be.visible'),
        inventoryDescription: () => cy.get('.inventory_details_desc').should('be.visible'),
        backToProductButton: () => cy.get('#back-to-products').should('be.visible'),


    }

    verifyHomePageLanding() {
        this.locators
            .appLogo()
            .contains("Swag Labs")
        return this
    }

    clickOnSidePanelHamBurgerButton() {
        this.locators
            .sidePanelHamBurgerOpenButton()
            .click()
        return this
    }

    clickOnSidePanelHamBurgerCloseButton() {
        this.locators
            .sidePanelHamBurgerCloseButton()
            .click()
        return this
    }
    verifyLeftNavigationPanelItem(itemName) {
        this.locators
            .leftNevigationPanelItem()
            .contains(itemName)
        return this

    }
    verifyLeftNavigationPanelItems(itemArray) {
        for (let i = 0; i < itemArray.length; i++) {
            this.verifyLeftNavigationPanelItem(itemArray[i])
        }
        return this
    }
    verifyInventoryItemPrice(itemPrice) {
        this.locators
            .inventoryItemsPrice()
            .contains(itemPrice)
        return this

    }
    verifyInventoryItemsPrice(priceArray) {
        for (let i = 0; i < priceArray.length; i++) {
            this.verifyInventoryItemPrice(priceArray[i])
        }
        return this
    }

    clickOnAddToCartButton(i) {
        this.locators
            .addToCartButton(i)
            .click()
        return this
    }

    addMultipleProductToCart(totalProduct) {
        for (let i = 0; i < totalProduct; i++) {
            this
                .clickOnAddToCartButton(i)
        }
        return this
    }

    clickOnShopingCartButton() {
        this.locators
            .shppingCartButton()
            .click()
        return this
    }

    openInventoryItem(itemName) {
        this.locators.inventoryItemName()
            .contains(itemName)
            .click()
        return this
    }

    verifyInventoryDescription(description) {
        this.locators
            .inventoryDescription()
            .contains(description)
        return this
    }

    clickOnBackToProductButton() {
        this.locators
            .backToProductButton()
            .click()
        return this
    }

}

export default new HomePage()