angular
  .module('prototype')
  .service('AuthenticationService', AuthenticationService)

function AuthenticationService($auth) {
  this.login = user => $auth.login(user)
  this.logout = () => $auth.logout()
  this.status = () => $auth.isAuthenticated()
  this.user = () => $auth.getPayload()
}
