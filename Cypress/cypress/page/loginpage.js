class LoginPage {

    locators = {
        usernameInputField: () => cy.get("#user-name").should('be.visible'),
        passwordInputField: () => cy.get('#password').should('be.visible'),
        loginButton: () => cy.get('#login-button').should('be.visible'),
    }
    insertTextInUsernameInputField(text) {

        this.locators
            .usernameInputField()
            .click()
            .clear()
            .type(text)
        return this
    }

    insertTextInPasswordInputField(text) {

        this.locators
            .passwordInputField()
            .click()
            .clear()
            .type(text)
        return this
    }

    clickOnLoginButton() {
        this.locators
            .loginButton()
            .contains('Login')
            .click()
        return this
    }
}

export default new LoginPage()