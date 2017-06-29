module.exports = chaiTestCafe

function chaiTestCafe(chai, utils) {
  const {Assertion} = chai
  const {flag} = utils

  Assertion.addProperty('exists', function() {
    const element = flag(this, 'object')
    const throwMessage = 'expect element exists'
    const throwMessageNegative = 'expect element dont exists'

    return element.exists
      .then((exists) => {
        this.assert(exists === true, throwMessage, throwMessageNegative)
      })
  })
}
