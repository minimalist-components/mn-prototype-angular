const {internet} = require('faker')
const {Selector: selector} = require('testcafe')

class LoginPageObject {
  constructor(page) {
    this.page = page

    this.inexistent = selector('mn-test')
    this.email = selector('mn-email')
    this.password = selector('mn-password')
    this.button = selector('button[type="submit"]')
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
