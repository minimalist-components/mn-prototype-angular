const PageObject = require('./login.po.js')
const {expect} = require('chai')
  .use(require('./chai-test-cafe.js'))

let login

fixture `login`
  .page('http://localhost:8080/login')
  .beforeEach(page => {
    login = new PageObject(page)
  })

  test('has a email input', async () => {
    await expect(login.email).to.exists
  })

  test('has a password input', async () => {
    await expect(login.password).to.exists
  })

  test('has a submit button', async () => {
    await expect(login.button).to.exists
  })

  test('has a message hidden (wrong credentials)', async () => {
    await expect(login.message).to.exists
    await expect(login.message).to.have.text('The email or password you’ve entered doesn’t match any account')
    await expect(login.message).to.not.have.class('visible')
  })

  test('submit empty form, show invalid fields', async () => {
    await login.submit()
    await expect(login.email).to.have.class('invalid')
    await expect(login.password).to.have.class('invalid')
    await expect(login.message).to.not.have.class('visible')
  })

  test('show message when try to login with invalid credentials', async () => {
    await login.typeInvalidCredentials()
    await login.submit()

    await expect(login.message).to.have.class('visible')
  })

  test('successful login redirect to /users', async (page) => {
    await login.typeValidCredentials()
    await login.submit()
    const {pathname} = await page.eval(() => window.location)

    await expect(pathname).to.be.equal('/users')
  })
