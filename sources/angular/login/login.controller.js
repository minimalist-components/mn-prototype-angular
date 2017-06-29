angular
  .module('prototype')
  .controller('LoginController', LoginController)

function LoginController(Authentication, $state) {
  let email
  let password

  this.credentials = {
    email,
    password,
  }

  this.authenticate = authenticate

  function authenticate() {
    Authentication
      .login(this.credentials)
      .then(redirectToHome)
      .catch(unauthorized)

    function redirectToHome() {
      $state.go('app.home')
    }

    function unauthorized(error) {
      if (error.statusText === 'Unauthorized') {
        const message = document.querySelector('.invalid-credentials-message')
        message.classList.add('visible')
      }

      return error
    }
  }
}
