const PageObject = require('./login.po.js')
const {expect} = require('chai')
  .use(require('chai-as-promised'))

let login

fixture `login`
  .page('http://localhost:8080/login')
  .beforeEach(page => {
    login = new PageObject(page)
  })

  test('simple', async () => {
    await expect(login.email.exists).to.eventually.be.true
  })

