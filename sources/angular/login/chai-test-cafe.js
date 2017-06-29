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

  Assertion.addProperty('visible', function() {
    const element = flag(this, 'object')
    const throwMessage = 'expect element be visible'
    const throwMessageNegative = 'expect element dont be visible'

    return element.visible
      .then((visible) => {
        this.assert(visible === true, throwMessage, throwMessageNegative)
      })
  })

  Assertion.addMethod('class', function(className) {
    const element = flag(this, 'object')
    const throwMessage = `expect element has class .${className}`
    const throwMessageNegative = `expect element dont have class .${className}`

    return element.hasClass(className)
      .then((hasClass) => {
        this.assert(hasClass === true, throwMessage, throwMessageNegative)
      })
  })

  Assertion.addMethod('text', function(text) {
    const element = flag(this, 'object')
    const throwMessage = `expect element has text ${text}`
    const throwMessageNegative = `expect element dont have text ${text}`

    return element.innerText
      .then((innerText) => {
        this.assert(innerText === text, throwMessage, throwMessageNegative)
      })
  })
}
