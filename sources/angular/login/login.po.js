const {internet} = require('faker')
const {Selector: selector} = require('testcafe')
// const {ClientFunction: clientFunction} = require('testcafe')

class LoginPageObject {
  constructor(page) {
    this.page = page
    // this.location = clientFunction(() => window.location)

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
    await this.page.typeText(this.email.find('input'), 'darlanmendonca@gmail.com')
    await this.page.typeText(this.password.find('input'), 'hkswpnx')
  }

  async submit() {
    await this.page.click(this.button)
  }
}

module.exports = LoginPageObject
