import {internet} from 'faker'
import {Selector as querySelector} from 'testcafe'

class LoginPageObject {
  constructor(page) {
    this.page = page

    this.username = querySelector('mn-input[name="username"]')
    this.password = querySelector('mn-password[name="password"]')
    this.button = querySelector('button')
  }

  async typeInvalidCredentials() {
    await this.page.typeText(this.username.find('input'), internet.userName())
    await this.page.typeText(this.password.find('input'), internet.password())
  }

  async typeValidCredentials() {
    await this.page.typeText(this.username.find('input'), 'darlanmendonca@gmail.com')
    await this.page.typeText(this.password.find('input'), 'hkswpnx')
  }

  async submit() {
    await this.page.click(this.button)
  }
}

module.exports = LoginPageObject
