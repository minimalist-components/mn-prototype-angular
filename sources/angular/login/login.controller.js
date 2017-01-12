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

    function redirectToHome() {
      $state.go('app.home')
    }
  }
}
