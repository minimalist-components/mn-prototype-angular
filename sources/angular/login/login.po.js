const {internet} = require('faker')
const {Selector: selector} = require('testcafe')

class LoginPageObject {
  constructor(page) {
    this.page = page

    this.email = selector('mn-email')
    this.password = selector('mn-password')
    this.button = selector('button[type="submit"]')
    this.message = selector('.invalid-credentials-message')
  }

  async typeInvalidCredentials() {
    await this.page.typeText(this.email.find('input'), internet.email())
    await this.page.typeText(this.password.find('input'), internet.password())
  }

  async typeValidCredentials() {
    await this.page.typeText(this.email.find('input'), 'admin@admin.com')
    await this.page.typeText(this.password.find('input'), 'admin')
  }

  async submit() {
    await this.page.click(this.button)
  }
}

module.exports = LoginPageObject
