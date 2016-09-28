class LoginController {
  constructor() {
    let username;
    let password;

    this.credentials = {
      username,
      password,
    };
  }

  authenticate() {
    console.log(this.credentials);
    // Authentication
    //   .login(this.credentials)
    //   .then(redirect);
  };

  // function redirect() {
  //   $state.go('app.home');
  // }
}

angular
  .module('prototype')
  .controller('LoginController', LoginController);
