const {internet} = require('faker')
const {Selector} = require('testcafe')

class LoginPageObject {
  constructor(page) {
    this.page = page

    this.email = Selector('mn-input[name="email"]')
    this.password = Selector('mn-password[name="password"]')
    this.button = Selector('button')
  }

  async typeInvalidCredentials() {
    await this.page.typeText(this.email.find('input'), internet.userName())
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
