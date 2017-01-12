angular
  .module('prototype')
  .service('Authentication', Authentication)

function Authentication($auth) {
  this.login = user => $auth.login(user)
  this.logout = () => $auth.logout()
  this.status = () => $auth.isAuthenticated()
  this.user = () => $auth.getPayload()
}
