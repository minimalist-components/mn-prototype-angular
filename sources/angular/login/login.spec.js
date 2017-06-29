const PageObject = require('./login.po.js')
const {expect} = require('chai')
  .use(require('./chai-test-cafe.js'))

let login

fixture `login`
  .page('http://localhost:8080/login')
  .beforeEach(page => {
    login = new PageObject(page)
  })

  test('has a email', async () => {
    await expect(login.email).to.exists
  })

