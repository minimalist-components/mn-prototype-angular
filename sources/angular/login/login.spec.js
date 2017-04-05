import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import PageObject from './login.po.js'

chai
  .use(chaiAsPromised)

let login

fixture `login`
  .page('http://localhost:8080/login')
  .beforeEach(page => {
    login = new PageObject(page)
  })

  test('simple', async () => {
    await expect(login.username.exists).to.eventually.be.true
  })

