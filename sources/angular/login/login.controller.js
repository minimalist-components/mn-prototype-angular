angular
  .module('prototype')
  .controller('LoginController', LoginController)

function LoginController(AuthenticationService, $state) {
  let email
  let password

  this.credentials = {
    email,
    password,
  }

  this.authenticate = authenticate

  function authenticate() {
    AuthenticationService
      .login(this.credentials)
      .then(redirectToHome)

    function redirectToHome() {
      $state.go('app.home')
    }
  }
}
