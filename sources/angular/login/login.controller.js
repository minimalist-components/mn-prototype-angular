angular
  .module('prototype')
  .controller('LoginController', LoginController);

function LoginController(AuthenticationService, $state) {
  let username;
  let password;

  this.credentials = {
    username,
    password,
  };

  this.authenticate = authenticate;

  function authenticate() {
    AuthenticationService
      .login(this.credentials)
      .then(redirectToHome);

    function redirectToHome() {
      $state.go('app.home');
    }
  }
}
